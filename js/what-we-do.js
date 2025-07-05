/**
 * A reusable function to initialize a tab-like system.
 * @param {string} linkSelector - The CSS selector for the clickable links.
 * @param {string} contentSelector - The CSS selector for the content panes.
 */
function initializeTabSystem(linkSelector, contentSelector) {
    const links = document.querySelectorAll(linkSelector);
    const contents = document.querySelectorAll(contentSelector);

    links.forEach(link => {
        // Only add listeners to buttons that are not disabled
        if (!link.disabled) {
            link.addEventListener('click', () => {
                const targetId = link.getAttribute('data-target');

                // Deactivate all links in this group
                links.forEach(item => item.classList.remove('active'));
                // Hide all content panes in this group
                contents.forEach(item => item.classList.remove('active'));

                // Activate the clicked link
                link.classList.add('active');
                
                // Show the corresponding content pane
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        }
    });
}

// Initialize the system for the "Capabilities" section
initializeTabSystem('.capability-link', '.capability-content');

// Initialize the system for the "Industries" section
initializeTabSystem('.industry-link', '.industry-content');
