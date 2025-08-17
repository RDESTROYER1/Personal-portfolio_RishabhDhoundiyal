
var typed = new Typed('#element', {
    strings: ['Learner', 'Tech Enthusiast', 'Web Developer'],
    typeSpeed: 50,
});

// GitHub button
document.getElementById("githubBtn").addEventListener("click", function () {
    window.open("https://github.com/RDESTROYER1", "_blank");
});

// Professional Highlights button → scroll to Projects section
document.querySelector('.bto').addEventListener('click', () => {
    document.querySelector('.secondsection').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Certificate buttons
document.querySelectorAll('.btk').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('data-link');
        window.open(link, '_blank'); // opens in new tab
    });
});




