jQuery(document).ready(function($) {


	//Team Carousel Activation
	$(".workers-slider").owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		dots:false,
		nav: false,
		margin: 30,
		center: true,
		smartSpeed:1000,
		    responsive:{
        0:{
            items:1,
            nav:false
        },
		400:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
		}
	
	});	
	
	//Product Carousel Activation
	$(".product-slider").owlCarousel({
		items: 4,
		loop: true,
		autoplay: true,
		dots:false,
		nav: true,
		navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		margin: 20,
		smartSpeed:1000,
		    responsive:{
        0:{
            items:1,
            nav:false
        },
		400:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
		}
	
	});	
	
	
	// Search Area Show
	$(".main-menu .dynamic-search, .small-chart .dynamic-search").on('click',function() {
		
		$(".search-area").addClass("search-area-active");
		
		return false;
	});
	
	$(".search-area i.fa-close").on('click',function() {
		
		$(".search-area").removeClass("search-area-active");
		
		return false;
	});
	
	
	
	// Client Area Slider
	$(".clientss-area").owlCarousel({
		  loop: true,
		  autoplay: true,
		  items: 1,
		  dots: true,
		  smartSpeed:1000,
		  animateOut: 'slideOutUp',
		  animateIn: 'slideInUp'

	});
	
	//isotope list click function
	$(".project-menu li").on('click', function() {
		$(".project-menu li").removeClass("active-gallary");
		$(this).addClass("active-gallary");
		
	});
	
	//Isotope Click filter Function
	$(".project-menu li").on('click', function() {
		var selector = $(this).attr("data-filter");
		$(".project-gallery-wrap").isotope({
			filter: selector
		});
	});
	
	$(".scroll-top").on('click', function() {
		$("html, body").animate({scrollTop:0},1000);
		return false;
	});

	
	
	// Li Scroller
	$(".sponcer-slider").liScroll({
		
		travelocity: 0.05
		
	});
	
	//Scroll To top Area 
	$(window).scroll(function(){
		if($(this).scrollTop() >300){
			$(".scroll-top").fadeIn();
		}else{
			$(".scroll-top").fadeOut();
		}
		
	});
	
	
		
	// slick nav menu plugin active here
	$(".main-menu").slicknav({
		prependTo: '.mobile-menu',
		allowParentLinks:true
	});
	
	
	// Login page Click Function
	
	$(".login-area span").on('click', function(){
		$(".login-area").addClass("logactive");
		$(".overlay").css({
			"opacity" : ".4",
			"visibility" : "visible"
		});
	});
	
	$(".overlay, .dismiss").on('click', function(){
		$(".login-area").removeClass("logactive");
		$(".overlay").css({
			"opacity" : "0",
			"visibility" : "hidden"
		});
	});
	

	// Wow js animation
		new WOW().init();
	
});