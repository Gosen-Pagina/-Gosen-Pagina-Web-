document.addEventListener("DOMContentLoaded", function () {
    function scrollToSection(selector) {
        const section = document.querySelector(selector);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Botón "Inicio" - Desplazar hacia arriba
    const inicioBtn = document.querySelector("#btn-inicio");
    if (inicioBtn) {
        inicioBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Botón "Contacto"
    const contactoBtn = document.querySelector('a[href="#contacto"]');
    if (contactoBtn) {
        contactoBtn.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToSection("#contacto");
        });
    }

    // Botón "Productos"
    const productosBtn = document.querySelector('a[href="#productos"]');
    if (productosBtn) {
        productosBtn.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToSection("#productos");
        });
    }
});
