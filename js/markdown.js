// ==========================================
// MARKDOWN CONFIGURATION
// ==========================================

function initializeMarkdown() {

    if (typeof marked === "undefined") {

        console.error("Marked.js not loaded.");

        return;

    }

    marked.setOptions({

        gfm: true,

        breaks: true,

        headerIds: false,

        mangle: false,

        highlight(code, language) {

            if (
                typeof hljs !== "undefined" &&
                language &&
                hljs.getLanguage(language)
            ) {

                return hljs.highlight(code, {
                    language
                }).value;

            }

            if (typeof hljs !== "undefined") {

                return hljs.highlightAuto(code).value;

            }

            return code;

        }

    });

}



// ==========================================
// MARKDOWN
// ==========================================

function renderMarkdown(text) {

    return marked.parse(text);

}
