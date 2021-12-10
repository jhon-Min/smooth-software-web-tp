$(document).ready(function () {
  let screenHeight = $(window).height();

  $(window).scroll(function () {
    let current = $(this).scrollTop();

    if (current > screenHeight - 300) {
      $(".navbar").addClass("site-nav");
    } else {
      $(".navbar").removeClass("site-nav");
    }
  });
});
