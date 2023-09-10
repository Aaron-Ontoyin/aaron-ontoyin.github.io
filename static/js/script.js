// Smooth scrolling for navigation links
function scrollToTarget(targetId) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

document.getElementById("cta-button").addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    scrollToTarget(targetId);
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToTarget(targetId);
    });
});

// nav toggle
const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

menuToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
});

const navbarLinks = document.querySelectorAll('.navbar-menu a');
navbarLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navbarMenu.classList.remove('active');
    });
});


// // Back to Top button
const backButton = document.getElementById('back-to-top-button');

window.addEventListener('scroll', function () {

    if (document.documentElement.scrollTop > 100) {
        backButton.style.display = 'block';
    } else {
        backButton.style.display = 'none';
    }
});

backButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

