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

// accordion:
(function () {
    const $togglers = document.querySelectorAll("[data-accordion-toggler]");

    if (!$togglers.length) return;

    $togglers.forEach(($toggler) => {
        $toggler.addEventListener("click", function (e) {
            e.preventDefault();

            const $accordion = $toggler.closest("[data-accordion]");

            if (!$accordion) return;

            $accordion.classList.toggle("is-open");
        });
    });
})();
