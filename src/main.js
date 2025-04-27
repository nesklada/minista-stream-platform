document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("is-loaded");
    }, 500);
});

// header-menu:

(function () {
    const $menuTogglers = document.querySelectorAll(".js_header-menu");

    $menuTogglers.forEach(($toggler) => {
        $toggler.addEventListener("click", function (e) {
            e.preventDefault();

            document.body.classList.toggle("header-menu-opened");
        });
    });
})();
