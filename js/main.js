$(document).ready(function () {
    if ($('.big-slider').length >= 1) {

        $('.big-slider').slick({
            dots: true,
            speed: 1000,
            autoplay: true,
            pauseOnHover: false,
            fade: true

        });
    }
    if ($('.block-slider').length >= 1) {
        $('.block-slider').each(function () {
            var item = $(this);
            // var slide_to_show = item.hasClass('block-slider--brand') ? 6 : 4;
            item.slick({
                arrows: true,
                speed: 400,
                slidesToShow: 5,
                variableWidth: false,
                appendArrows: item.parent().find('.block-slider__arrows-wrap')
            });
        })
    }
    if ($('.item').length >= 1) {

        $('.item__focus').slick({
            dots: true,
            speed: 500,
            autoplay: true,
            pauseOnHover: false,
            fade: true,
            // asNavFor: '.item-images .row',
            customPaging: function (slider, i) {
                console.log(123, slider, i)
                return $('.item__focus-image:nth-child(' + (i + 1) + ')').html();
            }
        });

    }

});
