window.onload = function () {
  //   AOS.init();

  let vueboxcheck = $(".vue-box");
  let clonboxcheck = $(".clon-box");
  let studyClone = $(".study-clone");
  let studyVue = $(".study-vue");

  studyVue.click(function (e) {
    e.preventDefault();
    vueboxcheck.addClass("portfolio-wrap-box-active");
    clonboxcheck.removeClass("portfolio-wrap-box-active");
    studyVue.addClass("portfolio-menu-active");
    studyClone.removeClass("portfolio-menu-active");
  });

  studyClone.click(function (e) {
    e.preventDefault();
    clonboxcheck.addClass("portfolio-wrap-box-active");
    vueboxcheck.removeClass("portfolio-wrap-box-active");
    studyClone.addClass("portfolio-menu-active");
    studyVue.removeClass("portfolio-menu-active");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".go-top").fadeIn();
    } else {
      $(".go-top").fadeOut();
    }
  });

  $(".go-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
};
