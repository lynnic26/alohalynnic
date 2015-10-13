$(function(){
	$('#bars').click(function(){
		toggleNavigation();
	});

    $('.tlt').textillate({
    	loop:true,
    	// sets the minimum display time for each text before it is replaced
  		minDisplayTime: 3000,
    });

	var $message = $('#message');
	
	$message.on('mouseenter', function(){
		
		setTimeout(function(){
			$message.find('.outside').html('ENTER');
		},200);
	});
	
	$message.on('mouseleave', function(){
		
		setTimeout(function(){
			$message.find('.outside').html('BLOG');
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