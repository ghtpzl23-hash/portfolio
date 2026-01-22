$(function() {    
  $(".main-menu > li").on('mouseenter', function() {
    if ($(window).width() > 768) { 
      $(this).find(".submenu").stop().slideDown(300);
    }
  }).on('mouseleave', function() {
    if ($(window).width() > 768) { 
      $(this).find(".submenu").stop().slideUp(300);
    }
  });

  $('.m-menu-btn').on('click', function() {
    $(this).toggleClass('on');
    $('.gnb').toggleClass('active'); 
  });
  
  $('.main-menu > li > a').on('click', function(e) {
    if ($(window).width() <= 768) {
      const $submenu = $(this).next('.submenu');
      if ($submenu.length > 0) {
        e.preventDefault(); 
        $('.submenu').not($submenu).slideUp(); 
        $submenu.stop().slideToggle();
      }
    }
  });
  
  setInterval(function(){ 
    let $now = $(".slide-item").eq(0);
    let $next = $(".slide-item").eq(1); 

    $now.animate({ opacity: 0 }, 600);
    $next.addClass('active').css("opacity", 0).animate({ opacity: 1 }, 600, function(){
        $(".slide-container").append($now);
        $now.removeClass('active').css("opacity", 1);
      });
  }, 3000);

 
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 200) {
      $('.quick-call').fadeIn();
    } else {
      $('.quick-call').fadeOut();
    }
  });

 
  $('.faq-q').on('click', function() {
    $(this).next('.faq-a').stop().slideToggle();
    $('.faq-a').not($(this).next()).slideUp();
  });

  
  $('.modal-overlay, .close-btn').on('click', function(e) {
    if (e.target === this || $(this).hasClass('close-btn')) {
      $('#event-modal').fadeOut();
    }
  });

});