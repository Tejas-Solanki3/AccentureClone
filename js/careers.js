document.addEventListener('DOMContentLoaded', () => {

   
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tabId = link.getAttribute('data-tab');

            // Remove active class from all links and content
            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(item => item.classList.remove('active'));

            // Add active class to the clicked link and its corresponding content
            link.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    })

});
