document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            const headerHeight = document.querySelector("header").offsetHeight;

            window.scrollTo({
                top: targetSection.offsetTop - headerHeight,
                behavior: "smooth",
            });

            // Add active class to the clicked link
            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});

function togglePopup(popupId) {
    var popup = document.getElementById(popupId);

    if (!popup.style.zIndex || popup.style.zIndex === '-1') {
        // Show the popup
        popup.style.zIndex = '2';
        setTimeout(() => {
            popup.style.opacity = '1';
            popup.style.transform = 'translate(-50%, -50%)';
        }, 0);
    } else {
        // Hide the popup
        popup.style.opacity = '0';
        popup.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
            popup.style.zIndex = '-1';
        }, 300);
    }
}

// JavaScript code to handle button visibility
document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons
    const buttons = document.querySelectorAll(".button-with-image");

    // Add a class to hide all buttons initially
    buttons.forEach((button) => button.classList.add("hide"));

    // Show the first button initially
    buttons[0].classList.remove("hide");

    // Scroll event listener
    window.addEventListener("scroll", function () {
        // Calculate the position of each button
        buttons.forEach((button, index) => {
            const rect = button.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            // Toggle the visibility of each button based on its position
            if (isVisible) {
                buttons.forEach((btn) => btn.classList.add("hide"));
                button.classList.remove("hide");
            }
        });
    });
});
