document.addEventListener("DOMContentLoaded", function () {
    // Open Collapse
    const collpaseBtn = document.getElementById("collapse-btn");
    const navbarCollapse = document.getElementById("navbar-collapse");
    
    collpaseBtn.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });

    // Open Dropdown Menu (< 992px)
    const dropdownLinks = document.querySelectorAll(".navbar-nav .dropdown > .nav-link");
    dropdownLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (window.innerWidth < 992) {
                event.preventDefault();
                const dropdownMenu = this.nextElementSibling;
                if (dropdownMenu && dropdownMenu.classList.contains("dropdown-menu")) {
                    dropdownMenu.classList.toggle("show");
                }
            }
        });
    });
});