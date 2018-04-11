$(document).ready(function(){
			$("#sub").click(function(){
				$("#meau").slideToggle(500);
			})
			$(window).scroll(function(){
				if($(document).scrollTop()>100){
					$("#meau").fadeOut(1000);
				}
				if($(document).scrollTop()>500){
					$(".gotop").fadeIn(500)
				}else{
					$(".gotop").fadeOut(500)
				}
			})
			$('.stu_1').find('li').click(function() {
	        $('.stu_1').find('li').attr('class', '');
	        $('.kaul').find('div').css('display', 'none');
	        $(this).attr('class', 'active');
	        $('.kaul').find('div').eq($(this).index()).fadeIn(500);
    })
			
			$('.radi').find('li').click(function() {
	        $('.radi').find('li').attr('class', '');
	        $('.radi').children('div').addClass('haha').addClass('haha1').find('iframe').addClass('haha').addClass('haha1');
	        $(this).attr('class', 'react');
	        $('.radi').children('div').eq($(this).index()).removeClass('haha').removeClass('haha1').find('iframe').removeClass('haha').removeClass('haha1');
    })
			
			
		})