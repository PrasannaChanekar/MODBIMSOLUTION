document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for Portfolio filtering/sorting logic.
    // In a real application, you would use this file to filter
    // the .project-tile elements based on category buttons/select boxes.
    
    console.log("Portfolio JavaScript loaded. Ready for dynamic filtering.");

    // Example of adding hover/click effects beyond CSS
    const projectTiles = document.querySelectorAll('.project-tile');

    projectTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            // Placeholder: Simulate viewing the project case study
            const projectTitle = tile.querySelector('h3').textContent;
            alert(`Opening case study for: ${projectTitle}`);
        });
    });
});