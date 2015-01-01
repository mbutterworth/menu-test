(function(){

	$(document).on('click',function(e){
		var $targ = $(e.target),
			level = $targ.parent().attr('class');


			if ($targ.is("#toggle")) {
				$('[role="banner"],main').toggleClass('is-open');
				$('.is-back-button, .active, .is-hidden, .open').removeClass('is-back-button active is-hidden open');
			}

			


			if ( $targ.hasClass('active') ) {
				if ( level == "level-one" ) {
					$targ.removeClass('active is-back-button').next('ul').removeClass('open');
					$targ.parents(".level-one").siblings().removeClass('is-hidden');
				}
				if ( level == "level-two" ) {
					$targ.removeClass('active').next('ul').removeClass('open');
					$targ.parents(".level-one").find('> span').removeClass('is-back-button').addClass('active');
					$targ.parents(".level-one").siblings().addClass('is-hidden');
					$targ.parents(".level-one").find('> ul').addClass('open');
				
					// $targ.parents(".level-open).next('ul').removeClass('open');
				}
				// $('.open, .is-back-button, .is-hidden').removeClass('open is-back-button is-hidden');
				// $targ.removeClass('active').next('ul').removeClass('open');				
			} else {
				if ( level == "level-one" ) {
					if ($targ.hasClass('active')) {
						$targ.removeClass('active is-back-button').next('ul').toggleClass('open');
						$targ.parents(".level-one").siblings().addClass('is-hidden');
					} else if ($targ.hasClass('is-back-button') && !$targ.hasClass('active')) {
						$('.level-two').find('span, ul').removeClass('active open');
						$targ.removeClass('is-back-button');
						$('.is-hidden').removeClass('is-hidden');
					} else {
						$targ.addClass('active').next('ul').addClass('open');
						$targ.parents('.level-one').siblings().addClass('is-hidden');
					}
					// } else if ( $targ.children(".level-two").find('> span').hasClass('active') ) {
					// 	$targ.find("*").removeClass('active open');
					// }
				}
				if ( level == "level-two" ) {
					$('.level-one > .open').removeClass('open');
					$('.level-one > .active').removeClass('active');
					$targ.addClass('active')
						.next('ul').addClass('open');
					$targ.parents('.level-one').find('span').addClass('is-back-button');


					//$targ.parents(".level-one").siblings().find('span').removeClass('active');
				}
				// $('.open, .is-back-button, .is-hidden').removeClass('open is-back-button is-hidden');
				// $targ.addClass('active').next('ul').addClass('open');				
			}

			// if ( level == "level-one" ) {
			// 	$('.is-hidden').removeClass('is-hidden');
			// 	$targ.parents(".level-one").siblings().find('span').addClass('is-hidden');
			// }

			// if ( level == "level-two" ) {
			// 	$targ.parents('.level-one').find('> span').addClass('is-back-button').removeClass('active');
			// };

	})


})();
