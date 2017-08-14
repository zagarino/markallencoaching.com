$(function(){
  
  var $navbar = $('.navbar-primary'); 
  var $mobile = $('.mobile-menu-icon');
  var $menu = $('.primary-links');
  var $trigger = $('#cart-trigger');
  
  var updateTop = function (evt) {
       if ($(window).scrollTop() > $navbar.height()) {
         $navbar.addClass('sticky');
       } else {
          $navbar.removeClass('sticky');
       }
  };
  
  $(window).on('scroll', _.throttle(updateTop, 100));
    
	$mobile.click(function(evt){
    evt.preventDefault();
        $(this).toggleClass('open');
        $menu.toggleClass('navbar-expanded');
	});
  
  $trigger.click(function (evt) {
    $('.cart').toggleClass('open');
  });
   
});