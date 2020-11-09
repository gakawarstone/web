$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".socreq");

    if(windowWidth < 768){
      elem.addClass('order-first');
    }
    else{
      elem.removeClass('order-first');
    }
  }

  checkWidth();

  $(window).resize(function(){
    checkWidth();
  });
});

$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".old");

    if(windowWidth < 768){
      elem.addClass('order-first');
    }
    else{
      elem.removeClass('order-first');
    }
  }

  checkWidth();

  $(window).resize(function(){
    checkWidth();
  });
});

$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".young");
                                    
    if(windowWidth < 768){
      elem.addClass('order-first');
    }
    else{
      elem.removeClass('order-first');
    }
  }

  checkWidth();

  $(window).resize(function(){
    checkWidth();
  });
});
