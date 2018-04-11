$(document).ready(function(){
	var i=0;
	var s;
	$('.sdown').click(function(){
		$('.piaochaugn').hide();
		if(i<10){
		setTimeout(function(){
		$('.piaochaugn').show();
		i++;
		s=i;
	},6000)
		
	}	
	});
	$(window).scroll(function () {
		var a = document.getElementById("ifr1").offsetTop;
		if (a >= $(window).scrollTop() && a < ($(window).scrollTop()+$(window).height())) {
			$('.piaochaugn').hide();
		}else{
			$('.piaochaugn').show();
		}
		});
})
