
document.addEventListener("DOMContentLoaded", () => {
    // Hide all brand divs initially
    const brandDivs = document.querySelectorAll("#vivo-brand, #realme-brand, #oppo-brand");
    brandDivs.forEach(div => (div.style.display = "none"));

    // Set up click event listeners for the links
    const links = document.querySelectorAll("#mobile-brands a");
    links.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor behavior

            // Hide all brand divs
            brandDivs.forEach(div => (div.style.display = "none"));

            // Show the clicked brand div
            if (index === 0) {
                document.getElementById("vivo-brand").style.display = "flex";
            } else if (index === 1) {
                document.getElementById("realme-brand").style.display = "flex";
            } else if (index === 2) {
                document.getElementById("oppo-brand").style.display = "flex";
            }
        });
    });
});
