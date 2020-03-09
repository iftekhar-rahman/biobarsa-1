jQuery(document).ready(function($){



    // homepage-slides
	$(".homepage-slides").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
        autoplay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});


    $(".products-wrap").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        margin: 30,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 2,
                margin: 15,
                nav: false
            },
            580: {
                items: 3,
                margin: 10,
                nav: false
            },
            720: {
                items: 3,
                margin: 15,
                nav: false
            },
            960: {
                items: 3
            },
            1140: {
                items: 3
            }

        }
    });

// responsive menu
$('#menu').slicknav();



    

    

});