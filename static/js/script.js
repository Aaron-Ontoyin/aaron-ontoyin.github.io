const testimonialDiv = $('.testimonial .p-2');
const testimonialImg = $('.testimonial img');

const galleryContainer = $('.gallery-container-inner');
const images = [
    "1.jpg",
    "2.jpeg",
    "3.jpg",
    "4.jpeg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg"
];


$(document).ready(function () {
    AOS.init();

    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    for (var i = 0; i < images.length; i++) {
        var img = $('<img>');
        img.attr('src', 'static/images/gallery/' + images[i]);
        img.addClass('gallery-item');
        img.attr('data-aos', 'fade-left');
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
