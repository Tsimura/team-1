$(document).ready(function(){
    $('.hero__list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000    });
  });
  $('.hero__list').on('init reInit',function(e,slick){
    if(slick.slideCount<=slick.options.slidesToShow){
      slick.slickAdd(slick.$slides.clone())
    }
})