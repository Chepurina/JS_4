'use strict'
$(function(){
	$('form li.tooltip').hover(
		function(){
		$(this).find('span').stop().animate({opacity: 1});
		},
		function(){
		$(this).find('span').stop().animate({opacity: 0});
		}),
	$('div button').click(function() {
		$('form span').stop().animate({opacity: 1});
	});
});
 
 

 
 


