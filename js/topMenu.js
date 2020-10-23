//topMenu

const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuActive = document.querySelector('.menu__nav_list');


function changeStyle() {
	if(window.pageYOffset <= header.offsetHeight){
		menuActive.style.top = (header.offsetHeight + menu.offsetHeight - window.pageYOffset) + 'px'
	}else{
		menuActive.style.top = menu.offsetHeight +'px'
	}
}
//topMenu resize window
$(function(){
    changeStyle() ;
    $(window).resize(function(){
        changeStyle();
    });
    $(window).scroll(function(){
        changeStyle();
    });
});