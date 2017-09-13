//WOW
new WOW().init();
 $(document).ready(function(){
  $("#nav, #navbar-header").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс, отнимаем 80 пикс. хедера
    $('body,html').animate({scrollTop: top-80}, 1500);
  });
});

//Для стрелок
(function($) {
    var $window = $(window),
        $html = $('#section-scheme .section__inner div:nth-child(-n+4)');
    function resize() {
        if ($window.width() > 1023) {
            return $html.addClass('after');
        }
        $html.removeClass('after');
    }
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);

//Для wow
(function($) {
    var $window = $(window),
        $html = $('.for_wow > div');
    function resize() {
        if ($window.width() > 1023) {
            return $html.addClass('wow');
        }
        $html.removeClass('wow');
    }
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);


//Resize thumbnail-slider
$(function() {
  $(window).on("load resize",function(){
    setTimeout(function () {
      $('#thumbnail-slider, #thumbnail-slider2, #thumbnail-slider3, #thumbnail-slider4').css("height", $('.slider-inner').height());
      $('#thumbnail-slider ul li, #thumbnail-slider2 ul li, #thumbnail-slider3 ul li, #thumbnail-slider4 ul li').css("height", $('#thumbnail-slider ul li').width()*578/800);
    }, 0.000000000001); // время в мс
  });
});


//Comments
$(function(){
    $('#comments__link_1').click (function() {
        $('#comments__photo_2, #comments__text_2, #comments__photo_3, #comments__text_3').addClass('hide');
        $('#comments__photo_1, #comments__text_1').removeClass('hide');
        $('#comments__link_1').addClass('comments__link-black');
        $('#comments__link_2, #comments__link_3').removeClass('comments__link-black');
        $('#comments__photo_1').addClass('bounceInLeft');
        $('#comments__photo_2, #comments__photo_3').removeClass('bounceInLeft');
        $('#comments__text_1').addClass('bounceInRight');
        $('#comments__text_2, #comments__text_3').removeClass('bounceInRight');
        $('comments__photo, comments__text').removeClass('wow');
    });
});

$(function(){
    $('#comments__link_2').click (function() {
        $('#comments__photo_1, #comments__text_1, #comments__photo_3, #comments__text_3').addClass('hide');
        $('#comments__photo_2, #comments__text_2').removeClass('hide');
        $('#comments__link_2').addClass('comments__link-black');
        $('#comments__link_1, #comments__link_3').removeClass('comments__link-black');
        $('#comments__photo_2').addClass('bounceInLeft');
        $('#comments__photo_1, #comments__photo_3').removeClass('bounceInLeft');
        $('#comments__text_2').addClass('bounceInRight');
        $('#comments__text_1, #comments__text_3').removeClass('bounceInRight');
        $('comments__photo, comments__text').removeClass('wow');
    });
});

$(function(){
    $('#comments__link_3').click (function() {
        $('#comments__photo_1, #comments__text_1, #comments__photo_2, #comments__text_2').addClass('hide');
        $('#comments__photo_3, #comments__text_3').removeClass('hide');
        $('#comments__link_3').addClass('comments__link-black');
        $('#comments__link_1, #comments__link_2').removeClass('comments__link-black');
        $('#comments__photo_3').addClass('bounceInLeft');
        $('#comments__photo_1, #comments__photo_2').removeClass('bounceInLeft');
        $('#comments__text_3').addClass('bounceInRight');
        $('#comments__text_1, #comments__text_2').removeClass('bounceInRight');
        $('comments__photo, comments__text').removeClass('wow');
    });
});