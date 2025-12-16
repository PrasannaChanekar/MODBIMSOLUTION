document.addEventListener('DOMContentLoaded', () => {
    // Function to handle the course filtering based on select box changes
    const filterCourses = () => {
        const softwareFilter = document.getElementById('software') ? document.getElementById('software').value : 'all';
        const courseCards = document.querySelectorAll('.course-card');

        courseCards.forEach(card => {
            const cardSoftware = card.getAttribute('data-software');
            let isVisible = true;

            // Apply Software Filter
            if (softwareFilter !== 'all' && cardSoftware !== softwareFilter) {
                isVisible = false;
            }

            // Apply visibility changes with CSS transitions for a smoother effect
            if (isVisible) {
                card.style.display = 'block';
                // Use a short delay to re-trigger the CSS animation/transition
                setTimeout(() => {
                    card.style.opacity = 1;
                    card.style.transform = 'translateY(0)';
                }, 50); 
            } else {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                // Hide after transition finishes
                setTimeout(() => {
                    card.style.display = 'none';
                }, 400); 
            }
        });
    };

    // Attach the filter function to the select element's change event
    const softwareSelect = document.getElementById('software');
    if (softwareSelect) {
        softwareSelect.addEventListener('change', filterCourses);
    }
    
    // Initial run to show all courses or apply default filter
    filterCourses();
});