jQuery(document).ready(function () {
  var elem = document.querySelector(".content__gallery-flickity");

  var flSlider = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    draggable: true,
    prevNextButtons: false,
    pageDots: false,
    freeScroll: false,
    fullscreen: true,
  });

  $(".btn-control-wrap .-right").click(function () {
    flSlider.next(false, false);
    // alert("a");
  });
  $(".btn-control-wrap .-left").click(function () {
    flSlider.previous(false, false);
    // alert("a");
  });
});
