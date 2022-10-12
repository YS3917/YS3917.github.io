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

  $(".go-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });

  let gnbA = $(".gnb a");
  let goTop = $(".go-top");
  goTop.removeClass("go-top-show");
  new Waypoint({
    element: $(".visual"),
    handler: function (direction) {
      if (direction == "down") {
        gnbA.removeClass("gnb-li-a-active");
        gnbA.eq(0).addClass("gnb-li-a-active");
      } else if (direction == "up") {
        // gnbA.eq(0).removeClass("gnb-li-a-active");
      }
    },
    offset: "30%",
  });

  new Waypoint({
    element: $(".portfolio"),
    handler: function (direction) {
      gnbA.removeClass("gnb-li-a-active");
      if (direction == "down") {
        gnbA.eq(1).addClass("gnb-li-a-active");
        goTop.addClass("go-top-show");
      } else if (direction == "up") {
        gnbA.eq(0).addClass("gnb-li-a-active");
        goTop.removeClass("go-top-show");
      }
    },
    offset: "30%",
  });

  new Waypoint({
    element: $(".profile"),
    handler: function (direction) {
      gnbA.removeClass("gnb-li-a-active");
      if (direction == "down") {
        gnbA.eq(2).addClass("gnb-li-a-active");
      } else if (direction == "up") {
        gnbA.eq(1).addClass("gnb-li-a-active");
      }
    },
    offset: "30%",
  });
  new Waypoint({
    element: $(".life"),
    handler: function (direction) {
      gnbA.removeClass("gnb-li-a-active");
      if (direction == "down") {
        gnbA.eq(3).addClass("gnb-li-a-active");
      } else if (direction == "up") {
        gnbA.eq(2).addClass("gnb-li-a-active");
      }
    },
    offset: "30%",
  });
  new Waypoint({
    element: $(".vision"),
    handler: function (direction) {
      gnbA.removeClass("gnb-li-a-active");
      if (direction == "down") {
        gnbA.eq(4).addClass("gnb-li-a-active");
      } else if (direction == "up") {
        gnbA.eq(3).addClass("gnb-li-a-active");
      }
    },
    offset: "80%",
  });
};
