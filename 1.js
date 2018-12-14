
 $(function(){
 	new WOW().init();

 var i = 0;
 var top = setInterval(position, 50);

 	function position(){
 		i++;
 		$('.top').css('background-position', '-'+ i +'px');
 	}
 	
 	$('.nutMenu').click(function(event){
 		$('.menu').toggleClass('menuActive')
 	});

 	//login
 	$(function(){


 	$('.btn-login').click(function(){
 		$('#dangnhap').addClass('login-on');
 	});

 	$('.done-login').click(function(){
 		$('#dangnhap').removeClass('login-on');
 	});
})
 	//scroll menu
 	var vitrimenu = $('.topHeader-menu').offset().top;
 	$(window).scroll(function(event){
 		var vitribody = $('html').scrollTop() || $('body').scrollTop();

 		if (vitribody>= 135) {
 			$('.topHeader-menu').addClass('fixed');
 		}else{
 			$('.topHeader-menu').removeClass('fixed');
 		}
 	})


 	

 	$('.item-service').click(function(event){
 		
 		$('.active').removeClass('active');

 		$(this).addClass('active');

 		

 		$('.active1').removeClass('active1');

 		var btnService = $(this).index()+1;
 		console.log(btnService)

 		$('.tab-box:nth-child('+ btnService +')').addClass('active1');
 	});

 	$hieuung = $('.tab-product').isotope({
  // options
  itemSelector: '.item-product',
  layoutMode: 'fitRows'
	});

 	$hieuung.imagesLoaded().progress( function() {
  		$hieuung.isotope('layout');
	});


 
		
		

})
 $('.btn-product a').on('click',function(event){
 		event.preventDefault();
 		$('.active2').removeClass('active2');

 		$(this).addClass('active2');

 		filterimage = $(this).attr('href');

 		console.log(filterimage);

 		$hieuung.isotope({filter:filterimage})
 	return false;
 	});

 $('#backtotop').click(function(){
			$('body,html').animate({scrollTop:0},600);
		});
	

	
$(window).scroll(function(){
	var top = $('body').scrollTop() || $('html').scrollTop();
	console.log(top);
	if (top >= 600) {
		$('#backtotop').css('opacity','1');
	}else{
		$('#backtotop').css('opacity', '0');
	}
})
  