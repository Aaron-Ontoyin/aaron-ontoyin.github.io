const testimonialDiv = $('.testimonial .p-2');
const testimonialImg = $('.testimonial img');


$(document).ready(function () {
    AOS.init();

    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    if (window.matchMedia('(max-width: 767px)').matches) {
        $('.testimonial').each(function () {
            let testimonialDiv = $(this).find('.p-2');
            let testimonialImg = $(this).find('img');

            testimonialImg.clone().insertBefore(testimonialDiv);
            testimonialImg.remove();
        });
    }

    $('#copyright-year').html(new Date().getFullYear());
});
