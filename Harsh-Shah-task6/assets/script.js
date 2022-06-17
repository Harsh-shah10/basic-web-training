// integrating owlCarousel Slide 


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        1200:{
            items:6
        },
        990:{
            items:4
        },
        767:{
            items:3
        },
        
        575:{
            items:2
        },
        0:{
            items:1
        },
    }
})

