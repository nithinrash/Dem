//Initial setup
function init(){
    checkWidth();
    setDropdowns();
  }
  
  function setDropdowns(){
    let i = 1;
    $('.dropdown-item').each(function(){
      $(this).css('top', `${i*$(this).height()}px`)
      i++;
    });
  }
  
  // Switching navbar display based on width
  function checkWidth(){
    var windowWidth = $(window).width();
  
    if(windowWidth>1000){
      $('.nav-menu-mobile').hide();
      $('.nav-menu').show();
    }
    else{
      $('.nav-menu-mobile').show();
      $('.nav-menu').hide();
      $('.menu-toggle').addClass('fa-bars');
      $('.menu-toggle').removeClass('fa-xmark');
      $('.nav-menu-mobile').data('status', 'closed')
      $('.nav-menu-mobile').css('transform', `translateX(0)`);
    }
  }
  
  function toggleNavMenu(){
    let windowWidth = $('.navbar').width();
    let menuToggleWidth = $('.nav-menu-mobile').width();
    let translateVal = (windowWidth/2)-(menuToggleWidth/2);
    if($('.nav-menu-mobile').data('status')=='closed'){
      $('.nav-menu-mobile').data('status', 'open')
      $('.nav-menu-mobile').css('transform', `translateX(-${translateVal}px)`);
    }
    else{
      $('.nav-menu-mobile').data('status', 'closed')
      $('.nav-menu-mobile').css('transform', `translateX(0)`);
    }
    $('.nav-menu').toggle();
    $('.menu-toggle').toggleClass('fa-bars');
    $('.menu-toggle').toggleClass('fa-xmark');
  }
  
  $(window).resize(checkWidth);
  $(document).ready(init);
  $('.nav-menu-mobile').click(toggleNavMenu);