// - -.


$(function(){
  $(".title").addClass("the-animation");
  $(".icon").bind("click", function() {
    if ($(".nav-container").is(":visible")) {
      $(".nav-container").hide(800);
      $(".icon").removeClass('the-icon');
    } else {
      $(".nav-container").show(800);
      $(".icon").addClass('the-icon');
    }
  });
});


//动画 超级无敌长的js
$(window).scroll( function () {
  // 给大标题加动画
  var clearNav = $(".nav-wz");
  var theTitle = $(".wrap-out-wz h1");
  var winTop = $(window).scrollTop();
  var theLeft = $(".left , .right");
  var flexItermOne = $(".flex-iterm-two:eq(0)")
  var flexItermTwo = $(".flex-iterm-two:eq(1)")
  var flexItermThree  = $(".flex-iterm-two:eq(2)")
  console.log(winTop);
  if (winTop > (clearNav.scrollTop() + 10)) {
    clearNav.addClass("nav-color");
  }
  else {
    clearNav.removeClass("nav-color");
  }
  if (winTop  > theTitle.scrollTop() + 200) {
    theTitle.addClass("slideUp-wz");
  }
if (winTop > (theLeft.scrollTop() + 400 )) {
  theLeft.addClass("scale-wz");
  }
  if (winTop > 1600) {
    flexItermOne.addClass("slideDown-rotate-wz");
    flexItermThree.addClass("slideUp-rotate-wz");
    flexItermTwo.addClass("rotate-Bigger-wz ");
  }
});


// meanbody 的 js
$(function () {
    var html = $(".left li:eq(0)");
    var css = $(".left li:eq(1)");
    var js = $(".left li:eq(2)");
    var htmlBox = $(".right:eq(0)");
    var cssBox = $(".right:eq(1)");
    var jsBox = $(".right:eq(2)");
    cssBox.hide();
    jsBox.hide();
     css.mousemove(function () {
      htmlBox.hide();
      jsBox.hide();
      cssBox.fadeTo("800",1).addClass("box-shown");
    })
    html.mousemove(function () {
      cssBox.hide();
      jsBox.hide();
      htmlBox.fadeTo("800" , 1).addClass("box-shown");
    })
    js.mousemove(function () {
      cssBox.hide();
      htmlBox.hide();
      jsBox.fadeTo("800" , 1).addClass("box-shown");
    })
})

var addAnimation = $()
