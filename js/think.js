document.addEventListener('DOMContentLoaded', () => {
    
    const filterButtons = document.querySelectorAll('.filter-button');

    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Stop the event from bubbling up to the window listener
            event.stopPropagation();
            
            const dropdownId = button.getAttribute('data-dropdown');
            const targetDropdown = document.getElementById(dropdownId);

            // Close all other open dropdowns first
            document.querySelectorAll('.filter-dropdown.show').forEach(dropdown => {
                if (dropdown.id !== dropdownId) {
                    dropdown.classList.remove('show');
                }
            });

            // Toggle the target dropdown
            targetDropdown.classList.toggle('show');
        });
    });

    // Add a global click listener to close dropdowns when clicking anywhere else
    window.addEventListener('click', () => {
        document.querySelectorAll('.filter-dropdown.show').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    });

});

