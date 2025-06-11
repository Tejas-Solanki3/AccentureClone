

document.addEventListener('DOMContentLoaded', () => {

    const awardsSection = document.getElementById('awards-section');
    if (!awardsSection) return;

    const cards = {
        card1: document.getElementById('award-card-1'),
        card2: document.getElementById('award-card-2'),
        card3: document.getElementById('award-card-3'),
    };

    
    const finalPositions = {
        
        card1: { x_vw: -25, y_vh: -25, rotate: 0, scale: 1 }, // Top-left
        card2: { x_vw: 25, y_vh: 0, rotate: 0, scale: 1 },    // Middle-right
        card3: { x_vw: -20, y_vh: 28, rotate: 0, scale: 1 }    // Bottom-left
    };


    window.addEventListener('scroll', () => {
        const { top } = awardsSection.getBoundingClientRect();
        const scrollableHeight = awardsSection.scrollHeight - window.innerHeight;
        let progress = Math.max(0, Math.min(1, (-top) / scrollableHeight));

        //  Card 1 
        let p1 = Math.min(1, progress / 0.33);
        applyTransform(cards.card1, finalPositions.card1, p1);

        //  Card 2
        let p2 = Math.max(0, Math.min(1, (progress - 0.33) / 0.33));
        applyTransform(cards.card2, finalPositions.card2, p2);

        //  Card 3
        let p3 = Math.max(0, Math.min(1, (progress - 0.66) / 0.34));
        applyTransform(cards.card3, finalPositions.card3, p3);

    }, { passive: true });

    function applyTransform(element, finalPos, p) {
        if (!element) return;
        if (p <= 0) {
        
            element.style.opacity = 0;
            element.style.transform = `translate(-50%, 50vh) scale(0.7)`;
            return;
        }

        const initial_scale = 0.7;
        const initial_y_vh = 50; 

        // Calculate current position by interpolating
        const current_x = p * finalPos.x_vw;
        const current_y = (initial_y_vh * (1 - p)) + (finalPos.y_vh * p); // Move from initial Y to final Y
        const current_scale = initial_scale + (p * (finalPos.scale - initial_scale));
        const current_rotate = p * finalPos.rotate;
        
        element.style.opacity = p;
        element.style.transform = `
            translate(calc(-50% + ${current_x}vw), calc(-50% + ${current_y}vh)) 
            scale(${current_scale}) 
            rotate(${current_rotate}deg)
        `;
    }
});
