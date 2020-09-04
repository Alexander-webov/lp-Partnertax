$(document).ready(function () {

  /* ==== slider  ====*/
  $('.header__slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    fade: true,
    zIndex: 99,
    prevArrow: '<a href="" class="prevArrow"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 11.031 13.969"> <defs><style>.cls-1{fill: #fff;fill-rule: evenodd;}</style></defs><path id="Фигура_9" data-name="Фигура 9"    class="cls-1 prev-svg"  d="M204,481.99l7.027,6.415a2.293,2.293,0,0,0,3.036,0l0.316-.288a1.844,1.844,0,0,0,0-2.773L210.7,481.99m0,0,3.674-3.355a1.842,1.842,0,0,0,0-2.772l-0.316-.289a2.3,2.3,0,0,0-3.036,0L204,481.99"    transform = "translate(-204 -475)"/></svg></a>',
    nextArrow: '<a href="" class="nextArrow"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 11 13.969"><defs> <style>.cls - 1{fill: #fff;fill - rule:#fff;} </style></defs > <path id = "nextArrow"data - name = "Фигура 9"class="cls-1 next-svg"d = "M1719,481.99l-7.02,6.415a2.3,2.3,0,0,1-3.04,0l-0.32-.288a1.855,1.855,0,0,1,0-2.773l3.68-3.354m0,0-3.68-3.355a1.854,1.854,0,0,1,0-2.772l0.32-.289a2.3,2.3,0,0,1,3.04,0l7.02,6.416"transform = "translate(-1708 -475)"/> </svg></a>',
  });

  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animate__animated', // default
    mobile: false, // default
  })
  wow.init();

  /* ==== scroll ==== */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 5) {

      $('.social-teleg').hover(function () {
          $('a svg #teleg').css({
            'color': '#fad406',
            'fill': ' #fad406',
          });
        },
        function () {
          $('a svg #teleg').css({
            'color': '#fff',
            'fill': ' #fff',
          });
        });
      $('.social-fb').hover(function () {
          $('a svg #fb').css({
            'color': '#fad406',
            'fill': ' #fad406',
          });
        },
        function () {
          $('a svg #fb').css({
            'color': '#fff',
            'fill': ' #fff',
          });
        });
      $('.social-vk').hover(function () {
          $('a svg #vk').css({
            'color': '#fad406',
            'fill': ' #fad406',
          });
        },
        function () {
          $('a svg #vk').css({
            'color': '#fff',
            'fill': ' #fff',
          });
        });
      $('.social-insta').hover(function () {
          $('a svg #insta').css({
            'color': '#fad406',
            'fill': ' #fad406',
          });
        },
        function () {
          $('a svg #insta').css({
            'color': '#fff',
            'fill': ' #fff',
          });
        });

      $('.social').addClass('social-bg');
    } else {

      $('.social').removeClass('social-bg');
    }


  });




  /* ==== hover menu phone + svg icon  ====*/
  $('.header__menu-phone').hover(function () {
      $('.header__menu-phone a, .header__menu-phone a path').css({
        'color': '#fad406',
        'fill': ' #fad406',
      });
    },
    function () {
      $('.header__menu-phone a, .header__menu-phone a path').css({
        'color': '#fff',
        'fill': ' #fff',
      });
    });


  $('.lang-active').on('click', function () {
    $('.header__menu-lang-list').toggleClass('hidden');
    $('.lang-active').css({
      'backgroundColor': 'rgba(34, 30, 31, 0.6)',
      'padding': '10px',
      'top': '0px',
    });

    if ($('.header__menu-lang-list').hasClass('hidden')) {
      $('.lang-active').css({
        'backgroundColor': 'transparent',
        'padding': '10px',
      });
    }
  });







});


/* ==== link select  ====
document.querySelector(".minimenu").onchange = function () {
  location.assign(this.value);
}
*/