$(function () {
  // pagetop
  const $pageTop = $(".pagetop");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $pageTop.fadeIn(300).css('display', 'flex');
    } else {
      $pageTop.fadeOut(300);
    }
  });
  $pageTop.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 300);
  });

  // nav_mobile
  const $navMobile = $(".nav_mobile");
  const $navMobileTrigger = $(".nav_mobile_trigger");
  $navMobileTrigger.click(function () {
    $(this).toggleClass("active");
    $navMobile.slideToggle();
    $(this).find('i').toggleClass('fa-navicon fa-times');
  });
})