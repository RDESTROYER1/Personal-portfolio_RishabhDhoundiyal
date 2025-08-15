
var typed = new Typed('#element', {
    strings: ['Learner', 'Tech Enthusiast', 'Web Developer'],
    typeSpeed: 50,
});


document.getElementById("githubBtn").addEventListener("click", function () {
    window.open("https://github.com/RDESTROYER1", "_blank");
});
document.querySelector('.bto').addEventListener('click', () => {
    document.querySelector('.secondsection').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

