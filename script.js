// script.js

// Function to switch between pages
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
        page.style.display = "none";
    });
    document.getElementById(pageId).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu a");
    const btnRegister = document.getElementById("btnRegister");

    // Event listener for menu links
    menuLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const pageId = this.getAttribute("href").substring(1); // Remove the "#" symbol
            showPage(pageId);
        });
    });

    // Event listener for the Register button
    btnRegister.addEventListener("click", function () {
        showPage("registration");
    });

    // Initial page display
    const currentPage = window.location.hash.substring(1);
    if (currentPage) {
        showPage(currentPage);
    } else {
        // Default to the homepage if no hash is present
        showPage("homepage");
    }
});
