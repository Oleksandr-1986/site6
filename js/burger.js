$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.menu__nav_list, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});