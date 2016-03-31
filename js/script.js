'use strict'
$(function(){
	$('.content .tabs__txt').hide();
	$('.content .tabs__txt:first').show();
	$('.tabs .tabs__name').click(function(e) {
		e.preventDefault();
	$('.tabs .tabs__name').removeClass('active').eq($(this).index()).addClass('active');
	$('.content .tabs__txt').hide().eq($(this).index()).fadeIn();
}).eq(0).addClass('active');
});
