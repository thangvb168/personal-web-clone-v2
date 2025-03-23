
// Modal Handler
const SELECTOR_DATA_TOGGLE = '[data-toggle="modal"]'
const SELECTOR_MODAL = '.modal'
const SELECTOR_MODAL_CONTENT = '.modal-content'
const SELECTOR_MODAL_BODY = '.modal-body'
const SELECTOR_MODAL_TITLE = '.modal-title'
const SELECTOR_CLOSE_BUTTON = '.btn-close'

const CLASS_NAME_OPEN = 'modal-open'
const CLASS_NAME_SHOW = 'show'

const ATTRIBUTE_DATA_TARGET = 'data-target'
const ATTRIBUTE_DATA_TITLE = 'data-title'
const ATTRIBUTE_DATA_BODY = 'data-body'

const openModal = (modal, titleText, bodyText) => {
    if (!modal) return

    const modalTitleElem = modal.querySelector(SELECTOR_MODAL_TITLE)
    const modalBodyElem = modal.querySelector(SELECTOR_MODAL_BODY)

    if(modalTitleElem) modalTitleElem.textContent = titleText
    if(modalBodyElem) modalBodyElem.textContent = bodyText

    modal.classList.add(CLASS_NAME_SHOW)
    document.body.classList.add(CLASS_NAME_OPEN)
}

const closeModal = (modal) => {
    if (!modal) return

    modal.classList.remove(CLASS_NAME_SHOW)
    document.body.classList.remove(CLASS_NAME_OPEN)
}

const initModal = (modalId) => {
    const modal = document.getElementById(modalId)
    if (!modal) return

    const closeButtons = modal.querySelectorAll(SELECTOR_CLOSE_BUTTON)
    closeButtons.forEach(button => {
        button.addEventListener('click', () => closeModal(modal))
    })

    modal.addEventListener('click', (event) => {
        if (!event.target.closest(SELECTOR_MODAL_CONTENT)) {
            closeModal(modal)
        }
    })
}

document.querySelectorAll(SELECTOR_DATA_TOGGLE).forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault()

        const modalId = this.getAttribute(ATTRIBUTE_DATA_TARGET)
        const titleText = this.getAttribute(ATTRIBUTE_DATA_TITLE)
        const bodyText = this.getAttribute(ATTRIBUTE_DATA_BODY)

        const modal = document.getElementById(modalId)
        if (!modal) return

        initModal(modalId)

        openModal(modal, titleText, bodyText)
    })
})

// Collapse Navbar Handler
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
