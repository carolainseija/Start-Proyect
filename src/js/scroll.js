$(document).ready(function () {
  $(".home").click(function () {
    $("html, body").animate({ scrollTop: $("#welcom").offset().top }, 500);
  });

  $(".server").click(function () {
    $("html, body").animate({ scrollTop: $("#server").offset().top }, 500);
  });

  $(".about").click(function () {
    $("html, body").animate({ scrollTop: $("#about").offset().top }, 500);
  });

  $(".team").click(function () {
    $("html, body").animate({ scrollTop: $("#team").offset().top }, 500);
  });
});
