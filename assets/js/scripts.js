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

    const btnOpenModal1 = document.getElementById('btn-open-modal-1');
    const btnOpenModal2 = document.getElementById('btn-open-modal-2');

    const modal1 = document.getElementById('modal-1');
    const modal2 = document.getElementById('modal-2');

    const btnClose = document.querySelectorAll('.btn-close');

    function openModal(modal) {
        modal.classList.add('show');
        document.body.classList.add('modal-open');
    }

    function closeModal(modal) {
        modal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }

    btnOpenModal1.addEventListener('click', () => openModal(modal1));
    btnOpenModal2.addEventListener('click', () => openModal(modal2));

    btnClose.forEach(btn => {
        btn.addEventListener('click', function () {
            console.log('close button clicked');
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function (event) {
            console.log('modal clicked');
            if (!event.target.closest('.modal-content')) {
                closeModal(modal);
            }
        });
    });
});