var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  nav: false,
  margin: 1,
  items: 1,
  touchDrag: true,
  slideTransition: "linear",
  autoplay: true,
  autoplayTimeout: 7000,
  autoplaySpeed: 750
});

owl.on('changed.owl.carousel', function(e) {
  owl.trigger('stop.owl.autoplay');
  owl.trigger('play.owl.autoplay');
});