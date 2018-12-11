
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


 	//scroll menu
 	var vitrimenu = $('.topHeader-menu').offset().top;
 	$(window).scroll(function(event){
 		var vitribody = $('html').scrollTop() || $('body').scrollTop();

 		if (vitribody > vitrimenu) {
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
})

  