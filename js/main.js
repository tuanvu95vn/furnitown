
hamburger = $('.hamburger')
navMB = $('.nav-side')

//Back to top
document.querySelector(".backtotop").addEventListener("click", function (e) {
    e.preventDefault
    window.scrollBy(
        {
            top: -document.body.offsetHeight,
            behavior: "smooth"
        }
    );
})

//Change Button Select
btnSelect = $('.page-btn')
btnSelect.click(function () {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})

// //.......................HEADER...........................
// $('header .search__icon').click(function (event) {
//     event.stopPropagation();
//     $('header .search').toggleClass('active')
// })
// $('body').click(function () {
//     $('header .search').removeClass('active')
// })

// //-Change Header color

// $(window).scroll(function () {

//     hHeader = $('header').outerHeight(true);
//     hSlider = $('.slider').outerHeight();
//     hBanner = $('.bannertop .img').outerHeight();
//     hBannerProduct = $('.head .banner').outerHeight();

//     var scrollTop = $(window).scrollTop();
//     if (scrollTop >= hSlider - hHeader) {
//         $('header').css("background-color", "#000")
//         // $header.style.opacity = "0.5"
//     }
//     else if (scrollTop >= hBannerProduct - hHeader) {
//         $('header').css("background-color", "#000")
//         // $header.style.opacity = "0.5"
//     }
//     else if (scrollTop >= hBanner - hHeader) {
//         $('header').css("background-color", "#000")
//         // $header.style.opacity = "0.5"
//     }
//     else {
//         $('header').css("background-color", "initial")
//     }

// });

//- Click Hamburger

hamburger.click(function (event) {
    event.stopPropagation();
    $(this).toggleClass('clicked')
    navMB.toggleClass('active')
})
$(window).scroll(function () {
    hamburger.removeClass('clicked')
    navMB.removeClass('active')
})
$('body').click(function () {
    hamburger.removeClass('clicked')
    navMB.removeClass('active')
})

// btn = $('.btn')
// btn.click(function () {
//     $(this).addClass('active')
//     $(this).siblings().removeClass('active')
// })


jQuery(document).ready(function(){
    var elem = document.querySelector('.slider__img');
    var flSlider = new Flickity( elem, {
        // options
            cellAlign: 'center',
            contain: true,
            wrapAround: false,
            draggable: true,
            prevNextButtons: false,
            pageDots: false,
            freeScroll: false,
        });
    $('.slider__bottom-control .-next').click(function () {
        flSlider.next(false,false)
    })
    $('.slider__bottom-control .-prev').click(function () {
        flSlider.previous(false,false)
    })
    flSlider.on( 'change', function( index ) {
        console.log((index))
        $('.slider__text-item').removeClass('active')
        $(`[data-text=${index.toString()}]`).addClass('active')
    });
    //-Fix bug resize but not responsive
    $(window).resize(function(){
        flSlider.destroy()
        flSlider = new Flickity( elem, {
            // options
              cellAlign: 'left',
              contain: true,
              wrapAround:false,
              draggable: true,
              prevNextButtons: false,
              pageDots: false,
              freeScroll: false
          });
    })
   
})