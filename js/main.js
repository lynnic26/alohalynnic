$(function(){
	$('#bars').click(function(){
		toggleNavigation();
	});


	var $message = $('#message');
	
	$message.on('mouseenter', function(){
		
		setTimeout(function(){
			$message.find('.outside').html('ENTER');
		},200);
	});
	
	$message.on('mouseleave', function(){
		
		setTimeout(function(){
			$message.find('.outside').html('WELCOME');
		},250);
	});
});


function toggleNavigation(){
	if ($('#canvas').hasClass('display-nav')) {
        // Close Nav
        	$('#canvas').removeClass('display-nav');
    } else {
	        // Open Nav
	        $('#canvas').addClass('display-nav');
	}
}