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
    // All brand page ========================================

    if ($('.all-brand').length >= 1) {

        // $('.brand-frame').css('top', $('.all-brand-products-item--open').offset().top + 61);
        // $('.brand-frame').css({
        //     'width': $('.all-brand-products').width()
        // });




        $('.all-brand-products-item').click(function () {
            var self = $(this);
            $('.brand-frame').removeClass('brand-frame--open');
            $('.all-brand-products-item').removeClass('all-brand-products-item--open');
            setTimeout(function () {
                $('.brand-frame').addClass('brand-frame--open');

                self.addClass('all-brand-products-item--open');
                $('.brand-frame').css('top', self.offset().top + 61);
                $('html, body').animate({
                    scrollTop: self.offset().top
                }, 1000);
            }, 300)
        });

        $(document).on('click', '.brand-frame__close', function () {
            $('.all-brand-products-item').removeClass('all-brand-products-item--open');
            $('.brand-frame').removeClass('brand-frame--open')
        });

    }
    // Catalog page ========================================
    if ($('.catalog-sidebar__item').length >= 1) {

        $('.catalog-sidebar__item-title').click(function () {
            $(this).parent().toggleClass('catalog-sidebar__item--active')
        })
    }


    // Common ========================================

    $(document).on('click', '.brand-frame__cat-name', function () {
        $('.brand-frame__cat-type').removeClass('brand-frame__cat-type--active');
        $(this).parent().toggleClass('brand-frame__cat-type--active')
    });



    // var a = $('.text').text().split('\n')
    // $('.text').text('')
    // $(a).each(function() {
    // 	// console.log('<a class="theaters__list-item link3" href="">'+this.toString()+'</a>')
    // 	$('.text').html($('.text').html() + '<a href="" class="all-brand-sidebar__item">' + this.toString() + '</a><br>')
    //
    // })
    //

});
