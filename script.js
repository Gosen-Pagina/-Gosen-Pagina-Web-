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

document.querySelectorAll('.thumbnails img').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('main-image').src = this.src;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            mainImage.src = this.src;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            // Agregar clase de animación
            mainImage.classList.add("fade-in");

            // Cambiar la imagen principal
            mainImage.src = this.src;

            // Remover la clase después de la animación (0.5s)
            setTimeout(() => {
                mainImage.classList.remove("fade-in");
            }, 500);

            // Remover la clase activa de todas las miniaturas
            thumbnails.forEach(img => img.classList.remove("active-thumbnail"));

            // Agregar clase activa a la miniatura seleccionada
            this.classList.add("active-thumbnail");
        });
    });
});
