/*--$(function() {
	$(window).scroll(function(){
		$('#top-bar').addClass('sticky');
	});
})--*/
$(function() {
	$('#iconicon').click(function(){
		$('.hidden-menu').slideToggle();
	});
	$('#menu-2').not().click(function(){
		$('.hidden-menu').hide();
	})
})
