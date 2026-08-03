// ==========================================
// CHAT
// ==========================================

function initializeChat() {

    const form = document.querySelector(".chat-form");
    const textarea = document.querySelector(".chat-form textarea");
    const messages = document.querySelector(".messages");
    const welcome = document.querySelector(".welcome");

    if (!form || !textarea || !messages) return;

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const text = textarea.value.trim();

        if (!text) return;

        if (welcome) {

            welcome.style.display = "none";

        }

        addUserMessage(text);

        textarea.value = "";

        textarea.style.height = "auto";

        document.querySelector(".send-btn").disabled = true;

        showTyping(text);


    });


    // --------------------------
    // USER MESSAGE
    // --------------------------

    function addUserMessage(text) {

        const article = document.createElement("article");

        article.className = "message user";

        article.innerHTML = `
            <div class="message-content">
                ${escapeHTML(text)}
            </div>
        `;

        messages.appendChild(article);

        scrollToBottom(true);

    }


    // --------------------------
    // AI MESSAGE
    // --------------------------

    function addAssistantMessage(text) {

        const article = document.createElement("article");

        article.className = "message assistant";

        article.innerHTML = `
            <div class="message-content">
                ${renderMarkdown(text)}
            </div>
        `;

        messages.appendChild(article);

        // Highlight every code block
        article
            .querySelectorAll("pre code")
            .forEach((block) => {

                hljs.highlightElement(block);

            });

        // Create toolbar
        initializeCodeBlocks(article);

        scrollToBottom();

    }


    // --------------------------
    // Typing
    // --------------------------
    async function showTyping(userMessage) {

        const typing = document.createElement("article");

        typing.className = "message assistant";

        typing.id = "typing";

        typing.innerHTML = `
            <div class="typing">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;

        messages.appendChild(typing);

        scrollToBottom();

        await new Promise(resolve =>
            setTimeout(resolve, 3000)
        );

        typing.remove();

        const reply = await getReply(userMessage);

        addAssistantMessage(reply);

    }

    // --------------------------
    // Get Reply
    // --------------------------

async function getReply(question) {

    const result = findKnowledge(question);

    if (result) {

        return await loadMarkdownProfile(result.file);

    }

    return `# Sorry 😅
            it seems that , there is a .js issue with the knowledge base, please check the console for more information.
            `;

}


    // --------------------------
    // Scroll
    // --------------------------

    function scrollToBottom(force = false) {

    const chatArea = document.querySelector(".chat-area");

    const distanceFromBottom =
        chatArea.scrollHeight -
        chatArea.scrollTop -
        chatArea.clientHeight;

    // Only auto-scroll if the user is already near the bottom
    if (force || distanceFromBottom < 150) {

        chatArea.scrollTo({

            top: chatArea.scrollHeight,

            behavior: "smooth"

        });

    }

}

// ==========================================
// START CONVERSATION
// ==========================================

async function startConversation() {

    const welcome = document.querySelector(".welcome");

    if (welcome) {

        welcome.style.display = "none";

    }

    const question = "Who is Abin Santhosh?";

    addUserMessage(question);

    showTyping(question);

}

startConversation();

}



// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


