import $ from "jquery";
import "slick-carousel";

$(() => {
  const body = $(document.body);
  $(".b-header__hamburger").click((e) => {
    body.addClass("mobile-menu-is-shown");
  });

  $(".b-mobile-menu__close").click((e) => {
    body.removeClass("mobile-menu-is-shown");
  });

  $(".b-clients-slider").slick({
    slidesToScroll: 1,
    slidesToShow: 2,
    dots: false,
    arrows: false,
    autoplay: true,
    mobileFirst: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        }
      },
    ]
  })

  // webp 
  if (!Modernizr.webp) {
    console.log("webp")
    const webpBg = $(".webp-bg");
    webpBg.each((index, elem) => {
      const el = $(elem);
      el.css("background-image", `url('${el.data("bg-fallback")}')`);
    });
  }
})