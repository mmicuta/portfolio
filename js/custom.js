// Custom scripts for home page

function hideActive(targetDiv){
	$('.active').removeClass(".active");
	$('.targetDiv').addClass(".active");
};

$(document).ready(function(){

	// CYCLE2 - IMAGE SLIDESHOW
	$('.slideshow').cycle({
		speed: 500,
	});

	$('.slideSelect').click(function(){
		event.preventDefault();
		var slideNo = this.className.split("-")[1];
		$('.slideshow').cycle('goto',slideNo);
	});

	$('.slideSelect').mouseenter(function(){
		event.preventDefault();
		var slideNo = this.className.split("-")[1];
		$('.slideshow').cycle('goto',slideNo);
	});

	//CUSTOM THUMBNAIL SLIDE SELECTION METHOD
	$('.slideSelect img').mouseenter(function(){
		$(this).fadeTo('fast',0.5);
	});

	$('.slideSelect img').mouseleave(function(){
		$(this).fadeTo('fast',1);
	});
	// END OF CYCLE2


	// CYCLE2 - PRIMARY CONTENT SLIDESHOW
	$('.primaryContentSlideShow').cycle({
		speed: 500,
	});

	$('#portfolioLink').click(function(){
		event.preventDefault();
		$('.primaryContentSlideShow').cycle('goto',0);
		test = $(this).hasClass('passivePrimary');
		if(test) {
			$(this).removeClass('passivePrimary');
			$('#resumeLink').addClass('passivePrimary');
			$('#resumeLink').fadeTo('fast', 0.2);
		}
		else {
			return;
		}
	});

	$('#resumeLink').click(function(){
		event.preventDefault();
		$('.primaryContentSlideShow').cycle('goto',1);
		test = $(this).hasClass('passivePrimary');
		if(test) {
			$(this).removeClass('passivePrimary');
			$('#portfolioLink').addClass('passivePrimary');
			$('#portfolioLink').fadeTo('fast', 0.2);
		}
		else {
			return;
		}
	});
	
	// HOVER EFFECT
	$('#portfolioLink').mouseenter(function(){
		test = $(this).hasClass('passivePrimary');
		if(test){
			$(this).fadeTo('fast', 1.0);
		}
		else{
			return;
		}		
	});
	$('#portfolioLink').mouseleave(function(){
		test = $(this).hasClass('passivePrimary');
		if(test){
			$(this).fadeTo('fast', 0.2);
		}
		else{
			return;
		}		
	});
	
	$('#resumeLink').mouseenter(function(){
		test = $(this).hasClass('passivePrimary');
		if(test){
			$(this).fadeTo('fast', 1.0);
		}
		else{
			return;
		}		
	});
	$('#resumeLink').mouseleave(function(){
		test = $(this).hasClass('passivePrimary');
		if(test){
			$(this).fadeTo('fast', 0.2);
		}
		else{
			return;
		}		
	});
	// END OF CYCLE2
	
	
	// CYCLE2 - PORTFOLIO CONTENT SLIDESHOW
	$('.secondaryContentSlideShow').cycle({
		speed: 500,
	});

	$('#fabLink').click(function(){
		event.preventDefault();
		$('.secondaryContentSlideShow').cycle('goto',0);
	});

	$('#repLink').click(function(){
		event.preventDefault();
		$('.secondaryContentSlideShow').cycle('goto',1);
	});

	$('#intLink').click(function(){
		event.preventDefault();
		$('.secondaryContentSlideShow').cycle('goto',2);
	});
	// END OF CYCLE2



	// HOVER EFFECT FOR NAV LINK TEXT
	$('.link a').mouseenter(function(){
		$(this).fadeTo('fast', 0.25);
	});
	$('.link a').mouseleave(function(){
		$(this).fadeTo('fast', 1.0);
	});
	
	

	// HOVER EFFECT FOR PAGE NAV ICONS
	$('.navicons img').mouseenter(function(){
		$(this).fadeTo('fast', 0.5);
	});
	$('.navicons img').mouseleave(function(){
		$(this).fadeTo('fast', 1.0);
	});
	
	// HOVER EFFECT FOR CONTENT IMAGES
	$('.contentImage').mouseenter(function(){
		$(this).fadeTo('fast', 0.8);
	});
	$('.contentImage').mouseleave(function(){
		$(this).fadeTo('fast', 1.0);
	});
});	

$(window).load(function(){
	
});

$(window).resize(function(){
	var x = $(".home_block");
	centerContent(x);
});


