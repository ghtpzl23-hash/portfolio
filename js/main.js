$(document).ready(function() {      
  function moveBall(ball) {
    const moveRange = Math.random() * 20 + 20; 
    const duration = Math.random() * 1000 + 2000;
    $(ball).animate({ marginTop: '+=' + moveRange }, duration, 'linear')
           .animate({ marginTop: '-=' + moveRange }, duration, 'linear', function() {
              moveBall(ball);
            });
  }  
  function loopAboutBall() {       
    $('.profile-ball').css({ left: '70%', opacity: 0 });
    $('.profile-ball').stop().animate({
        left: '90%', 
        opacity: 0.4    
    }, 2000, function() {            
        setTimeout(function() {               
            $('.profile-ball').animate({ opacity: 0 }, 1000, loopAboutBall);
        }, 5000); 
    });
  }      
  let isStarted = false;
  function handleScroll() {
    var scrollTop = $(window).scrollTop();    
    if (scrollTop > 50) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }    
    var aboutOffset = $('#about').offset().top - 500; 
    if (!isStarted && scrollTop > aboutOffset) {
        isStarted = true; 
        loopAboutBall(); 
    }
  }    
  $('.work-list a, nav a').click(function(e) {
    var target = $(this).attr('href');
    if (target && target.startsWith('#')) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 800, handleScroll);
    }
  });    
  $(window).on('scroll', handleScroll);
  handleScroll();
  $('.ball').each(function() { moveBall(this); });
});