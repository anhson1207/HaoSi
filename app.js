document.addEventListener("DOMContentLoaded", function() {
    let dropdownToggle = document.querySelector(".nav-item .nav-link.dropdown-toggle");
    let dropdownMenu = dropdownToggle.nextElementSibling;

    dropdownToggle.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("show");
    });
    document.addEventListener("click", function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});