// Get the button element
const startButton = document.getElementById('startButton');
const originalText = startButton.textContent.trim();
let pressTimer;
const ANIMATION_DURATION = 3000; // 3 seconds

// Function to handle the completion state
function handleCompletion() {
    

}

// Add event listeners for mouse interactions
startButton.addEventListener('mousedown', () => {
    
    // Start the animation when the button is pressed
    startButton.classList.add('animating');
});

startButton.addEventListener('mouseup', () => {

        startButton.classList.remove('animating');
});

startButton.addEventListener('mouseleave', () => {

        startButton.classList.remove('animating');
});

// Add touch event support for mobile devices
startButton.addEventListener('touchstart', (e) => {
    
    e.preventDefault(); // Prevent default touch behavior
    startButton.classList.add('animating');
    
});

startButton.addEventListener('touchend', (e) => {
    e.preventDefault(); // Prevent default touch behavior
    

        // Stop the animation
        startButton.classList.remove('animating');
});

startButton.addEventListener('touchcancel', (e) => {
    e.preventDefault(); // Prevent default touch behavior
    
        startButton.classList.remove('animating');
});