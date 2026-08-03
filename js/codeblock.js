// ==========================================
// CODE BLOCKS
// ==========================================

function initializeCodeBlocks(container) {

    const blocks = container.querySelectorAll("pre");

    blocks.forEach((pre) => {

        // Prevent duplicate toolbars
        if (pre.parentElement.classList.contains("code-block")) {

            return;

        }

        const code = pre.querySelector("code");

        if (!code) return;

        // Detect language
        let language = "Plain Text";

        code.classList.forEach((cls) => {

            if (cls.startsWith("language-")) {

                language = cls.replace("language-", "");

            }

        });

        language =
            language.charAt(0).toUpperCase() +
            language.slice(1);

        // Wrapper
        const wrapper = document.createElement("div");
        wrapper.className = "code-block";

        // Toolbar
        const toolbar = document.createElement("div");
        toolbar.className = "code-toolbar";

        // Language label
        const label = document.createElement("span");
        label.className = "code-language";
        label.textContent = language;

        // Copy button
        const button = document.createElement("button");
        button.className = "copy-btn";
        button.textContent = "📋 Copy";

        button.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText(
                    code.innerText
                );

                button.textContent = "✓ Copied";

                setTimeout(() => {

                    button.textContent = "📋 Copy";

                }, 2000);

            } catch {

                button.textContent = "Failed";

            }

        });

        toolbar.append(label, button);

        // Replace
        pre.parentNode.insertBefore(wrapper, pre);

        wrapper.append(toolbar);

        wrapper.append(pre);

    });

}