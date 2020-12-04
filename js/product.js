
jQuery(document).ready(function(){
    var elem1 = document.querySelector('.list01 .product__list-wrap');
    var fl1 = new Flickity( elem1, {
      // options
        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: false
    });
    fl1.playPlayer()
    var elem2 = document.querySelector('.list02 .product__list-wrap');
    var fl2 = new Flickity( elem2, {
      // options
        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: false
    });
    var elem3 = document.querySelector('.list03 .product__list-wrap');
    var fl3 = new Flickity( elem3, {
      // options
        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: false
    });
    var elem4 = document.querySelector('.list04 .product__list-wrap');
    var fl4 = new Flickity( elem4, {
      // options
        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: false
    });
    var elem5 = document.querySelector('.list05 .product__list-wrap');
    var fl5 = new Flickity( elem5, {
      // options
        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: false
    });
})