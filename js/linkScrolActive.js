//плавна прокрутка при натисканні на якорну ссилку
$(document).ready(function(){
    $(".menu__nav_list").on("click","a", function (event) {
        // виключаємо тандартну ракцію браузера
        event.preventDefault();
        // отримуємо ідентифікатор блока з атрибута href
        var id  = $(this).attr('href'),
        // знаходимо висоту на якій розташований блок віднімаємо висоту меню, щоб не перекривал
            top = $(id).offset().top - $(".menu").height();
        // анімація переходу блоку в мс
        $('body,html').animate({scrollTop: top}, 800);
    });
});
//присвоєння класа active при прокрутці ссилкам по якорям
var menu_selector = ".menu__nav_list"; 
function onScroll(){
	var scroll_top = $(document).scrollTop();
	$(menu_selector + " a").each(function(){
	    var hash = $(this).attr("href");
	    var target = $(hash);
	    if (target.position().top - $(".menu").height() <= scroll_top && target.position().top + 
	    target.outerHeight() > scroll_top) {
	        $(menu_selector + " a.active").removeClass("active");
	        $(this).addClass("active");
	    } else {
	        $(this).removeClass("active");
	    }
	});
}

$(document).ready(function () {
	$(document).on("scroll", onScroll);
	$("a[href^=#]").click(function(e){
    	e.preventDefault();
    	$(document).off("scroll");
    	$(menu_selector + " a.active").removeClass("active");
    	$(this).addClass("active");
    	var hash = $(this).attr("href");
   	 	var target = $(hash);

   	 	$("html, body").animate({
        	scrollTop: target.offset().top
    	}, 100, function(){
        	window.location.hash = hash;
        	$(document).on("scroll", onScroll);
   		 });
	});
})