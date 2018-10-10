$(document).scroll(funtion(){
	var hT = $("#design").offset().top,
       hH = $("#design").outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   	if (wS > (hT+hH-wH)){
       $('#design .init').removeClass('init');
   	}
});	
	
   