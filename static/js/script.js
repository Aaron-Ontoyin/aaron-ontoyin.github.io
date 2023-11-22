const bodyScrollOptions = {
    damping: 0.1,
    thumbMinSize: 5,
    renderByPixels: true,
    alwaysShowTracks: false,
    continuousScrolling: true
};

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

    // const scroll = new SmoothScroll('body', {
    //     damping: 1,
    //     speed: 500,
    //     thumbMinSize: 5,
    //     renderByPixels: true,
    //     alwaysShowTracks: false,
    //     continuousScrolling: true
    // });
    // const projectsScroll = new SmoothScroll('#projects-box', {
    //     damping: 1,
    //     thumbMinSize: 5,
    //     renderByPixels: true,
    //     alwaysShowTracks: false,
    //     continuousScrolling: true
    // });
    // const testimonialsScroll = new SmoothScroll('#testimonials-container-inner', {
    //     damping: 1,
    //     thumbMinSize: 5,
    //     renderByPixels: true,
    //     alwaysShowTracks: false,
    //     continuousScrolling: true
    // });

});
