$(function () {
  let timer = 0 ;
  $(".js-humburger--bt").click( function () {
    $(this).toggleClass("is-open");
    $(".js-humburger").toggleClass("is-open");
    $("body").toggleClass("is-open");
    //console.log("createClass");
  });
  $(window).on("resize",function () {
    let pcWidth = 769;
    if ( timer > 0 ) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      let resizeWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (resizeWidth >= pcWidth) {
        //
        //console.log("deleteClass");
        $(".js-humburger").removeClass("is-open");
        $(".js-humburger--bt").removeClass("is-open");
        $("body").removeClass("is-open");
      }
    }, 200);
  });
  //リンククリック時にis-openクラスの削除
  $(".p-gnavi a").click(function () {
    $(".js-humburger--bt").removeClass("is-open");
    $(".js-humburger").removeClass("is-open");
    $("body").removeClass("is-open");
  });
});
