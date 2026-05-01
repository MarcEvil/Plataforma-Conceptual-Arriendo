/**
 * Manejo de Carruseles de Imágenes
 * Permite desplazar las imágenes de las tarjetas de departamentos
 */
function moveCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('img');
    const totalImages = images.length;

    // Obtenemos el índice actual desde el atributo data-index
    let currentIndex = parseInt(carousel.getAttribute('data-index')) || 0;

    // Calculamos el nuevo índice
    currentIndex += direction;

    // Bucle infinito: si sobrepasa el final vuelve al principio y viceversa
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    // Guardamos el nuevo índice
    carousel.setAttribute('data-index', currentIndex);

    // Aplicamos la transformación CSS para mover el carrusel
    const offset = currentIndex * -100;
    carousel.style.transform = `translateX(${offset}%)`;
}

/**
 * Efecto de Aura Dinámica (Opcional)
 * Hace que el resplandor siga levemente el movimiento del cursor
 */
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card-aura');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Si el mouse está dentro de la tarjeta, movemos el gradiente sutilmente
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
            const xPercent = Math.round((x / rect.width) * 100);
            const yPercent = Math.round((y / rect.height) * 100);

            // Ajustamos la posición del pseudoelemento ::before mediante variables CSS
            card.style.setProperty('--mouse-x', `${xPercent}%`);
            card.style.setProperty('--mouse-y', `${yPercent}%`);
        }
    });
});

/**
 * Animación de entrada al cargar la página
 */
window.addEventListener('load', () => {
    const hero = document.querySelector('header');
    const cards = document.querySelectorAll('.card-aura');

    // Animación para el Hero
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(30px)';
    hero.style.transition = 'all 1s ease-out';

    setTimeout(() => {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 100);

    // Animación en cascada para las tarjetas
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 400 + (index * 150));
    });
});