// ==========================================
// TEXTAREA
// ==========================================

function initializeTextarea() {

    const textarea = document.querySelector(".chat-form textarea");
    const sendButton = document.querySelector(".send-btn");

    if (!textarea || !sendButton) return;

    const MIN_HEIGHT = 24;
    const MAX_HEIGHT = 220;

    // Initial state
    updateHeight();
    updateButtonState();

    // Auto-grow
    textarea.addEventListener("input", () => {

        updateHeight();
        updateButtonState();

    });

    // Enter to send
    textarea.addEventListener("keydown", (event) => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            if (!sendButton.disabled) {

                sendButton.click();

            }

        }

    });

    function updateHeight() {

        textarea.style.height = "auto";

        textarea.style.height =
            Math.min(textarea.scrollHeight, MAX_HEIGHT) + "px";

        if (textarea.scrollHeight > MAX_HEIGHT) {

            textarea.style.overflowY = "auto";

        } else {

            textarea.style.overflowY = "hidden";

        }

    }

    function updateButtonState() {

        sendButton.disabled =
            textarea.value.trim() === "";

    }

}