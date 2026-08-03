// ==========================================
// SIDEBAR
// ==========================================

function initializeSidebar() {
    createOverlay();

    const overlay =
        document.querySelector(".sidebar-overlay");

    const sidebar = document.querySelector(".sidebar");

    const desktopToggle =
        document.querySelector(".menu-btn");

    const mobileToggle =
        document.querySelector(".mobile-menu");

    createOverlay();


    // ----------------------------
    // Desktop Collapse
    // ----------------------------

    if (desktopToggle) {

        desktopToggle.addEventListener("click", () => {

            sidebar.classList.toggle("collapsed");

        });

    }


    // ----------------------------
    // Mobile Open
    // ----------------------------

    if (mobileToggle) {

        mobileToggle.addEventListener("click", () => {

            sidebar.classList.add("open");

            overlay.classList.add("show");

            document.body.style.overflow = "hidden";

        });

    }


    // ----------------------------
    // Overlay Close
    // ----------------------------

    overlay.addEventListener("click", closeSidebar);


    // ----------------------------
    // ESC Key
    // ----------------------------

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeSidebar();

        }

    });


    // ----------------------------
    // Window Resize
    // ----------------------------

    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {

            closeSidebar();

        }

    });


    // ----------------------------
    // Close Function
    // ----------------------------

    function closeSidebar() {

        sidebar.classList.remove("open");

        overlay.classList.remove("show");

        document.body.style.overflow = "";

    }

}



// ==========================================
// CREATE OVERLAY
// ==========================================

function createOverlay() {

    if (document.querySelector(".sidebar-overlay")) {

        return;

    }

    const overlay = document.createElement("div");

    overlay.className = "sidebar-overlay";

    document.body.appendChild(overlay);

}