// Navigation toggle with accessibility
const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
if (menuToggle && navbarMenu) {
    menuToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
        navbarMenu.setAttribute('aria-expanded', navbarMenu.classList.contains('active'));
    });
}

const navbarLinks = document.querySelectorAll('.navbar-menu a');
navbarLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navbarMenu.classList.remove('active');
        navbarMenu.setAttribute('aria-expanded', 'false');
    });
});

// Debounced scroll event for Back to Top button
const backButton = document.getElementById('back-to-top-button');
let scrollTimeout;
window.addEventListener('scroll', function () {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (document.documentElement.scrollTop > 100) {
            backButton.style.display = 'block';
        } else {
            backButton.style.display = 'none';
        }
    }, 100);
});

if (backButton) {
    backButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Gallery - event delegation and improved alt text
document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        for(let idx=0; idx < 16; idx++) {
            let name;
            if (idx == 1 || idx == 3)
                name = `${idx+1}.jpeg`;
            else
                name = `${idx+1}.jpg`;
            const altText = `Gallery Image ${idx+1}`;
            galleryContainer.innerHTML += `<div class="gallery-item" tabindex="0"><img src="static/images/gallery/${name}" alt="${altText}"></div>`;
        }
        // Event delegation for gallery items
        galleryContainer.addEventListener('click', function(e) {
            const item = e.target.closest('.gallery-item');
            if (item) showImgModal(item);
        });
        galleryContainer.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const item = document.activeElement.closest('.gallery-item');
                if (item) showImgModal(item);
            }
        });
    }
});

// Modal accessibility and keyboard support
const imageModal = document.querySelector('.image-modal');
const infoModal = document.querySelector('.info-modal');
const modalImg = document.getElementById('modalImage');
const modalClose = document.querySelectorAll('.close');

function showInfoModal() {
    if (infoModal) {
        infoModal.style.transition = 'opacity 0.8s ease-in-out';
        requestAnimationFrame(() => {
            infoModal.style.display = "flex";
            requestAnimationFrame(() => {
                infoModal.style.opacity = 1;
                infoModal.setAttribute('aria-modal', 'true');
                infoModal.setAttribute('role', 'dialog');
                infoModal.focus();
            });
        });
    }
}

function showImgModal(item) {
    if (!imageModal || !modalImg) return;
    imageModal.style.transition = 'opacity 0.8s ease-in-out';
    requestAnimationFrame(() => {
        imageModal.style.display = "flex";
        requestAnimationFrame(() => {
            imageModal.style.opacity = 1;
            imageModal.setAttribute('aria-modal', 'true');
            imageModal.setAttribute('role', 'dialog');
            imageModal.focus();
        });
    });
    modalImg.src = item.querySelector('img').src;
    modalImg.alt = item.querySelector('img').alt;
}

function hideModals() {
    if (imageModal) {
        imageModal.style.transition = 'opacity 0.8s ease-in-out';
        requestAnimationFrame(() => {
            imageModal.style.opacity = 0;
            requestAnimationFrame(() => {
                imageModal.style.display = "none";
            });
        });
    }
    if (infoModal) {
        infoModal.style.transition = 'opacity 0.8s ease-in-out';
        requestAnimationFrame(() => {
            infoModal.style.opacity = 0;
            requestAnimationFrame(() => {
                infoModal.style.display = "none";
            });
        });
    }
}

const secreteProjects = document.querySelectorAll('.secrete-project');
secreteProjects.forEach((item) => {
    item.addEventListener('click', () => {
        showInfoModal();
    });
});

if (modalClose) {
    modalClose.forEach((item) => {
        item.addEventListener('click', function () {
            hideModals();
        })
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideModals();
    }
});

const modalContact = document.getElementById('modal-cnt');
window.addEventListener('click', (event) => {
    if (event.target == imageModal || event.target == infoModal || event.target == modalContact) {
        hideModals();
    }
});

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
