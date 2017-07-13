'use strict';


    $('#popup_social').on('click', function (e) {
        e.preventDefault();
        $('.item_about_decription_ratig_link_socials_block').addClass('active');
    });
    $('.close').on('click', function () {
        $('.item_about_decription_ratig_link_socials_block').removeClass('active');
    });
    $('.item_about_decription_size p:not(:first-child)').on('click', function () {
        if ($(this).siblings().hasClass('selected')) {
            $(this).siblings().removeClass('selected');
        }
        $(this).addClass('selected');
    });

    var count = 0;
    $('.next').click(function () {
        if (count < 5) {
            $(' .item_slider_viewport').animate({ left: '-=100%' }, 500);
            count++;
        } else {
            $(' .item_slider_viewport').animate({ left: '0%' }, 500);
            count = 0;
        }
    });
    $('.prev').click(function () {
        if (count == 0) {} else {
            $('.item_slider_viewport').animate({ left: '+=100%' }, 500);
            count -= 1;
        }
    });

//# sourceMappingURL=maps/main.js.map
