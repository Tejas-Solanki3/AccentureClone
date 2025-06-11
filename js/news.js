
const newsTrack = document.getElementById('news-carousel-track');
const nextBtn = document.getElementById('news-next');
const prevBtn = document.getElementById('news-prev');

let newsIndex = 0;
const totalNewsPages = 2; // We have 4 items, 2 per page = 2 pages

function updateNewsCarousel() {
    // We move the track by 50% because each "page" is 2 items (50% of the track)
    newsTrack.style.transform = `translateX(-${newsIndex * 50}%)`;
    
    // Update button states
    prevBtn.disabled = newsIndex === 0;
    nextBtn.disabled = newsIndex === totalNewsPages - 1;
}

nextBtn.addEventListener('click', () => {
    if (newsIndex < totalNewsPages - 1) {
        newsIndex++;
        updateNewsCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (newsIndex > 0) {
        newsIndex--;
        updateNewsCarousel();
    }
});


updateNewsCarousel();
