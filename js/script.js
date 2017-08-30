$(document).ready(function(){
	$('.mainpage').click(function(){
		$('#menu').attr('Ariaexpended', 'false');
		$('#menu').removeClass('in')
	})

	$(window).resize(function() {
		$('#menu').attr('Ariaexpended', 'false');
		$('#menu').removeClass('in')
	});

})