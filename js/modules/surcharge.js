/**!
 * Slick init
**/

$(document).ready(function(){
  $('.videos').slick({
    dots: true,
    arrows: true,
  });

  $('.videoss').cxpSwiper({
    paginateByBullets: true, // activate bullets
    itemsPerSlide: 1, // number of items per slide
  });
});
