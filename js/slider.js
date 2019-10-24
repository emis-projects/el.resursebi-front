var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  nav: false,
  margin: 10,
  items: 1,
  touchDrag: true,
  slideTransition: "linear",
  autoplay: true,
  autoHeight: true,
  autoplayTimeout: 4500,
  autoplaySpeed: 500,
  lazyLoad: true
});