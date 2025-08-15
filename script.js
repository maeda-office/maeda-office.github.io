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
});