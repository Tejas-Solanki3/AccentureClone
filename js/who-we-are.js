document.addEventListener('DOMContentLoaded', () => {


    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentlyActiveHeader = document.querySelector('.accordion-header.active');
            if (currentlyActiveHeader && currentlyActiveHeader !== header) {
                currentlyActiveHeader.classList.remove('active');
                currentlyActiveHeader.nextElementSibling.style.maxHeight = 0;
            }
            
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            
            if (content.style.maxHeight) {
                // If it's open, close it
                content.style.maxHeight = null;
            } else {
                // If it's closed, open it
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

});
