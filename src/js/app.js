import $ from "jquery";

$(()=> {
  const body = $(document.body);
  $(".b-header__hamburger").click((e) => {
    body.addClass("mobile-menu-is-shown");
  });

  $(".b-mobile-menu__close").click((e) => {
    body.removeClass("mobile-menu-is-shown");
  });
})