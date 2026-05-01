/**
 * Efecto de Aura Dinámica para Anfitriones
 * Sigue el movimiento del cursor dentro de las tarjetas de perfil
 */
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card-aura');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();

        // Calculamos la posición del mouse relativa a la tarjeta
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Si el puntero está sobre la tarjeta
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
            const xPercent = Math.round((x / rect.width) * 100);
            const yPercent = Math.round((y / rect.height) * 100);

            // Enviamos las coordenadas al CSS
            card.style.setProperty('--mouse-x', `${xPercent}%`);
            card.style.setProperty('--mouse-y', `${yPercent}%`);
        }
    });
});

/**
 * Animación de entrada (Stagger effect)
 */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-aura');

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });
});