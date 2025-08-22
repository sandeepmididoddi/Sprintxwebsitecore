document.addEventListener('DOMContentLoaded', function() {
    const words = ['SprintX', 'Inspire', 'Innovate', 'Impact', 'Accelerate', 'Startup'];
    let currentIndex = 0;
    const rotatingText = document.getElementById('rotating-text');

    function rotateText() {
        rotatingText.classList.add('rotate-out');
        setTimeout(() => {
            rotatingText.textContent = words[currentIndex];
            rotatingText.classList.remove('rotate-out');
            rotatingText.classList.add('rotate-in');
            currentIndex = (currentIndex + 1) % words.length;
        }, 500); // Half of the rotation time for smooth transition
    }

    // Initial call to set first word immediately
    rotateText();

    // Start the rotation after the initial call
    setInterval(rotateText, 4000); // Change text every 4 seconds

    rotatingText.addEventListener('transitionend', function() {
        rotatingText.classList.remove('rotate-in');
    });
});