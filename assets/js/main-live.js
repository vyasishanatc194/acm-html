$(document).ready(function () {
  var showChar = 702; // How many characters are shown by default

  var ellipsestext = "...";
  var moretext = "Read More";
  var lesstext = "Read Less";

  function ReadMoreLessFunction() {
    $(".more").each(function () {
      var content = $(this).html();

      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);

        var html =
          c +
          '<span class="moreellipses">' +
          ellipsestext +
          '&nbsp;</span><span class="morecontent"><span>' +
          h +
          '</span>&nbsp;&nbsp; <div class="btn-more-div"> <a href="" class="morelink">' +
          moretext +
          "</a></span></div>";

        $(this).html(html);
      }
    });
  }

  function resizeFunction() {
    if (window.matchMedia("(max-width: 374px)").matches) {
      // samsung-galaxy-s10
      showChar = 194;
    } else if (
      window.matchMedia("(min-width: 375px) and (max-width: 389px)").matches
    ) {
      // iphone-x-xs-11-pro
      showChar = 194;
    } else if (
      window.matchMedia("(min-width: 390px) and (max-width: 392px)").matches
    ) {
      // iphone-12-12-pro
      showChar = 203;
    } else if (
      window.matchMedia("(min-width: 393px) and (max-width: 410px)").matches
    ) {
      // google-pixel-5
      showChar = 215;
    } else if (
      window.matchMedia("(min-width: 411px) and (max-width: 411px)").matches
    ) {
      // pixel2xl
      showChar = 320;
    } else if (
      window.matchMedia("(min-width: 412px) and (max-width: 413px)").matches
    ) {
      // google-pixel-4-4xl
      showChar = 226;
    } else if (
      window.matchMedia("(min-width: 414px) and (max-width: 427px)").matches
    ) {
      //common device
      showChar = 226;
    } else if (
      window.matchMedia("(min-width: 428px) and (max-width: 767px)").matches
    ) {
      //iphone-12-pro-max
      showChar = 320;
    } else if (
      window.matchMedia("(min-width: 768px) and (max-width: 799px)").matches
    ) {
      //ipad
      showChar = 279;
    } else if (
      window.matchMedia("(min-width: 800px) and (max-width: 833px)").matches
    ) {
      //samsung-galaxy-tab10
      showChar = 609;
    } else if (
      window.matchMedia("(min-width: 834px) and (max-width: 911px)").matches
    ) {
      //ipad-pro-105in
      showChar = 354;
    } else if (
      window.matchMedia("(min-width: 912px) and (max-width: 959px)").matches
    ) {
      //surface-pro-4-5-6
      showChar = 644;
    } else if (
      window.matchMedia("(min-width: 960px) and (max-width: 1023px)").matches
    ) {
      //surface-pro-3
      showChar = 820;
    } else if (
      window.matchMedia("(min-width: 1024px) and (max-width: 1366px)").matches
    ) {
    } else {
      // desktop device
    }

    ReadMoreLessFunction();
  }

  // $(window).on("resize", function () {
  //   resizeFunction();
  // });

  
  resizeFunction();

  $(".morelink").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
      $(this).parent().parent().parent().removeClass("more-text");
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
      $(this).parent().parent().parent().addClass("more-text");
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
});
