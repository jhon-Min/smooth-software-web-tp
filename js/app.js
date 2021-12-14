$(document).ready(function () {
  let screenHeight = $(window).height();

  $(window).scroll(function () {
    let current = $(this).scrollTop();

    if (current > screenHeight - 300) {
      $(".navbar").addClass("site-nav");
    } else {
      $(".navbar").removeClass("site-nav");
    }

    if (current > screenHeight) {
      $("#toTop").removeClass("d-none");
    } else {
      $("#toTop").addClass("d-none");
    }
  });
});

$(".navbar-toggler").click(function () {
  let result = $(".navbar-collapse").hasClass("hello");

  if (result) {
    $(".menu-icon").removeClass("feather-menu").addClass("feather-x");
    $(".navbar").addClass("shadow");
    $(".navbar-collapse").removeClass("hello");
  } else {
    $(".menu-icon").removeClass("feather-x").addClass("feather-menu");
    $(".navbar").removeClass("shadow");
    $(".navbar-collapse").addClass("hello");
  }
});
