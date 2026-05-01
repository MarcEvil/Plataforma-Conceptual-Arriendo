/**
 * Efecto de Aura Interactiva para Experiencias
 */
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card-aura');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();

        // Posición relativa del cursor dentro de la tarjeta
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Actualizar variables CSS solo si el mouse está sobre la tarjeta
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
            const xPercent = Math.round((x / rect.width) * 100);
            const yPercent = Math.round((y / rect.height) * 100);

            card.style.setProperty('--mouse-x', `${xPercent}%`);
            card.style.setProperty('--mouse-y', `${yPercent}%`);
        }
    });
});

/**
 * Animación de revelado al cargar la página
 */
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const cards = document.querySelectorAll('.card-aura');

    // Suavizar entrada del encabezado
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';
    header.style.transition = 'all 0.8s ease-out';

    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);

    // Animación en cascada para las tarjetas de experiencias
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });
});