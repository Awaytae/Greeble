// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Array of background images
    const backgrounds = [
        'background1.png',
        'background2.png',
        'background3.png',
        'background4.png',
        'background5.png'
    ];

    // Select a random background image
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBackground = backgrounds[randomIndex];

    // Apply the selected background image
    const backgroundContainer = document.getElementById('background-container');
    backgroundContainer.style.backgroundImage = `url('${selectedBackground}')`;

    // Handle popup display
    const aboutButton = document.getElementById('aboutButton');
    const motdButton = document.getElementById('motdButton');
    const aboutPopup = document.getElementById('aboutPopup');
    const closeButton = document.querySelector('.close');

    aboutButton.addEventListener('click', function() {
        aboutPopup.style.display = 'flex';
    });

    closeButton.addEventListener('click', function() {
        aboutPopup.style.display = 'none';
    });

    // Close popup if clicked outside of the content
    window.addEventListener('click', function(event) {
        if (event.target === aboutPopup) {
            aboutPopup.style.display = 'none';
        }
    });

    // Handle Message of the Day button click
    motdButton.addEventListener('click', function() {
        window.location.href = 'messageoftheday/index.html';
    });
});
