(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({scrollOffset: 0});


    var scrollfireOptions = [
      {selector: '#scrollfire-row-technics', offset: 400, callback: function(el) {
        $(el).children().each(function (index) {
          $(this).delay(1000 * index).animate({opacity: 1}, 1000);
        })
      } },
      {selector: '#scrollfire-row-ux', offset: 400, callback: function(el) {
        $(el).children().each(function (index) {
          $(this).delay(1000 * index).animate({opacity: 1}, 1000);
        })
      } },
    ];
    Materialize.scrollFire(scrollfireOptions);

  }); // end of document ready
})(jQuery); // end of jQuery name space

