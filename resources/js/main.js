$(document).ready(function () {
  // CARUSEL
  $('.carousel').slick({
    slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 4000,
     arrows: false,
     draggable: false,
     pauseOnFocus: false,
     pauseOnHover: false
 });

// HIDE THE MENU WHEN THE USER SCROLLS
 // var lastScrollTop = 0;
 // $(window).scroll(function() {
 //   var scrollTop = $(this).scrollTop();
 //   if (scrollTop - lastScrollTop > 50) {
 //     var navHeight = $('.navbar').css('height');
 //     $('.navbar').animate({top: '-' + navHeight}, 150);
 //     lastScrollTop = scrollTop;
 //   } else if (lastScrollTop - scrollTop> 50) {
 //     $('.navbar').animate({top: '0px'}, 150);
 //     lastScrollTop = scrollTop;
 //   }
 // });

// MOBILE MENU
   $('#nav-toggle').on('click', function(event){
     event.preventDefault();
     $('.mobile-list').slideToggle();
    //  $(this).toggleClass('active');
   });

  //  to move down the content after the menu
   $('.mobile-list a').on('click', function(event){
     event.preventDefault();
     var headerHeight = $('.navbar').height();
     var id = $(this).attr('href');
     var originalScrollCordinate = $(id).offset().top;
     var newScrollCordinate = originalScrollCordinate - headerHeight;
     $('html').animate({
       scrollTop : newScrollCordinate
     });
    //  $('html').scrollTop(newScrollCordinate);
   });

   $('.desktop-list a').on('click', function(event){
     event.preventDefault();
     var headerHeight = $('.navbar').height();
     var id = $(this).attr('href');
     var originalScrollCordinate = $(id).offset().top;
     var newScrollCordinate = originalScrollCordinate - headerHeight;
     $('html').animate({
       scrollTop : newScrollCordinate
     });
    //  $('html').scrollTop(newScrollCordinate);
   });
});

















0
