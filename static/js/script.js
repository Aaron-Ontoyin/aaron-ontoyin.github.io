const testimonialDiv = $('.testimonial .p-2');
const testimonialImg = $('.testimonial img');

const galleryContainer = $('.gallery-container-inner');
const numOfImages = 18;


$(document).ready(function () {
    AOS.init();

    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    for (let i = 1; i < numOfImages + 1; i++) {
        var img = $('<img>');
        img.attr('src', `static/images/gallery/${i}.webp`);
        img.addClass('gallery-item', 'img-fluid');
        img.attr('data-aos', 'fade-left');
        img.attr('width', 'auto');
        img.attr('height', 'auto');
        galleryContainer.append(img);
    }

    if (window.matchMedia('(max-width: 767px)').matches) {
        $('.testimonial').each(function () {
            var testimonialDiv = $(this).find('.p-2');
            var testimonialImg = $(this).find('img');

            testimonialImg.clone().insertBefore(testimonialDiv);
            testimonialImg.remove();
        });
    }

    $('#copyright-year').html(new Date().getFullYear());

    // var Scrollbar = window.Scrollbar;
    // var bodyScroll = Scrollbar.init(document.querySelector('body'), {
    //     damping: 0.05,
    //     speed: 500,
    //     thumbMinSize: 5,
    //     renderByPixels: true,
    //     alwaysShowTracks: false,
    //     continuousScrolling: true
    // });

    // var projectsScroll = Scrollbar.init(document.querySelector('#projects-box'), {
    //     damping: 0.1,
    //     thumbMinSize: 5,
    //     renderByPixels: true,
    //     alwaysShowTracks: false,
    //     // continuousScrolling: true
    // });

    // var testimonialsScroll = Scrollbar.init(document.querySelector('.testimonials-container-inner'), {
    //     damping: 0.1,
    //     thumbMinSize: 5,
    //     renderByPixels: true,
    //     alwaysShowTracks: false,
    //     continuousScrolling: true
    // });

});
