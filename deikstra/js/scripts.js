$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".socreq"); // лучше сохранять объект в переменную, многократно чтобы не насиловать
                                    // страницу для поиска нужного элемента
    if(windowWidth < 768){
      elem.addClass('order-first');
    }
    else{
      elem.removeClass('order-first');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });
});

$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".block-1"); // лучше сохранять объект в переменную, многократно чтобы не насиловать
                                    // страницу для поиска нужного элемента
    if(windowWidth < 768){
      elem.addClass('order-first');
    }
    else{
      elem.removeClass('order-first');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });
});

$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".young"); // лучше сохранять объект в переменную, многократно чтобы не насиловать
                                    // страницу для поиска нужного элемента
    if(windowWidth < 768){
      elem.addClass('order-first');
    }
    else{
      elem.removeClass('order-first');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });
});
