// // Smooth scrolling for navigation links
// function scrollToTarget(targetId) {
//     const targetElement = document.getElementById(targetId);

//     if (targetElement) {
//         window.scrollTo({
//             top: targetElement.offsetTop,
//             behavior: 'smooth'
//         });
//     }
// }

// document.getElementById("cta-button").addEventListener('click', function (e) {
//     e.preventDefault();
//     const targetId = this.getAttribute('href').substring(1);
//     scrollToTarget(targetId);
// });

// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         scrollToTarget(targetId);
//     });
// });

// nav toggle
const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

menuToggle.addEventListener('click', function () {
    navbarMenu.classList.toggle('active');
});

const navbarLinks = document.querySelectorAll('.navbar-menu a');
navbarLinks.forEach(function (link) {
    link.addEventListener('click', function () {
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

const galleryContainer = document.querySelector('.gallery-container');

for(let idx=0; idx < 16; idx++) {
    let name;
    if (idx == 1 || idx == 3)
    name = `${idx+1}.jpeg`
    else
    name = `${idx+1}.jpg`

    galleryContainer.innerHTML += `<div class="gallery-item"><img src="static/images/gallery/${name}" alt="Gallery Image"></div>`
};


backButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// // Modal for images
const imageModal = document.querySelector('.image-modal');
const infoModal = document.querySelector('.info-modal');
const modalImg = document.getElementById('modalImage');
const modalClose = document.querySelectorAll('.close');
const galleryItems = document.querySelectorAll('.gallery-item');

function showInfoModal() {
    infoModal.style.transition = 'opacity 0.8s ease-in-out';
    requestAnimationFrame(() => {
        infoModal.style.display = "flex";
        requestAnimationFrame(() => {
            infoModal.style.opacity = 1;
        });
    });
}

function showImgModal(item) {
    imageModal.style.transition = 'opacity 0.8s ease-in-out';

    requestAnimationFrame(() => {
        imageModal.style.display = "flex";
        requestAnimationFrame(() => {
            imageModal.style.opacity = 1;
        });
    });

    modalImg.src = item.querySelector('img').src;
}

function hideModals() {
    imageModal.style.transition = 'opacity 0.8s ease-in-out';
    infoModal.style.transition = 'opacity 0.8s ease-in-out';

    requestAnimationFrame(() => {
        imageModal.style.opacity = 0;
        infoModal.style.opacity = 0;
        requestAnimationFrame(() => {
            imageModal.style.display = "none";
            infoModal.style.display = "none";
        });
    });
}

const secreteProjects = document.querySelectorAll('.secrete-project');
secreteProjects.forEach((item) => {
    item.addEventListener('click', () => {
        showInfoModal();
    });
});

galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        showImgModal(item);
    });
});

modalClose.forEach((item) => {
    item.addEventListener('click', function () {
        hideModals();
    })
});

modalContact = document.getElementById('modal-cnt');
window.addEventListener('click', (event) => {
    if (event.target == imageModal || event.target == infoModal || event.target == modalContact) {
        hideModals();
    }
});
