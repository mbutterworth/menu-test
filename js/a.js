(function(){

	var tier = 1;

	$('.level-one').addClass('is-open');

	$(document).on('click','#primary-nav span',function(e){
		var $targ = $(e.target),
			$item = $targ.parent(),
			level = $item.attr('class');

		if ( $item.hasClass('level-one') ) {
			if ( tier == 1 ) {
				$item.addClass('active');
				$item.find('.level-two').addClass('is-open');
				$item.siblings().addClass('exit').removeClass('is-open');
				setTimeout(function(){
				 	$item.siblings().hide();
				},1000);	
				tier += 1;				
			} else if ( tier == 2 ) {
				$('.active').removeClass('active');
				$item.find('.level-two').removeClass('is-open');
				$item.siblings().show(10,function(){
					$item.siblings().removeClass('exit').addClass('is-open');
				    });
				tier -= 1;
			} else if ( tier == 3 ) {
				$('.active').removeClass('active');
				$item.find('.level-two').removeClass('is-open');
				$item.find('.level-three').removeClass('is-open');
				    $item.siblings().show(10,function(){
					$item.siblings().removeClass('exit').addClass('is-open');
				    });
				tier -= 2;
			}
		}

		if ( $item.hasClass('level-two') ) {
			if ( tier == 2 ) {
				$item.addClass('active');
				$item.find('.level-three').addClass('is-open');
				$item.siblings().addClass('exit').removeClass('is-open');
				setTimeout(function(){
					$item.siblings().hide();
				},400);	
				tier += 1;	
			} else if ( tier == 3 ) {
				$item.removeClass('active');
				$item.find('.level-three').removeClass('is-open');
				    $item.siblings().show(10,function(){
					$item.siblings().removeClass('exit').addClass('is-open');
				    });
				tier -= 1;					
			}
		}
	});

	$(document).on('click','#toggle',function(e){
		var $targ = $(e.target),
			$item = $targ.parent(),
			level = $item.attr('class');

		$('body').toggleClass('is-open');
		$('#primary-nav *').removeClass('active is-open exit').show();
			
	});


})();
