// ********************************************************
// NAV BAR
// 
$(function(){

    // Returns width of browser viewport
    var browser = $(window).width();
    // Returns width of HTML document
    var document = $(document).width();

    $('.nav .toggle-nav').click(function(e){
        $('.nav .nav-mobile').addClass('style-mobile').slideToggle('slow');
        e.preventDefault();
    });

});






//move input label function
$('.input-container').find('input').on('keyup blur focus', function (e) {
	var $this = $(this)
		, label = $this.next('label');
	if (e.type == 'blur') {
		if ($this.val() === '') {
			label.removeClass('active');
		}
	}
	else if (e.type === 'focus') {
		if ($this.val() === '') {
			label.addClass("active");
		}
	}
});
// Toggle Function
$('.toggle').click(function () {
	// Switches the Icon
	$(this).children('i').toggleClass('fa-pencil');
	$('.tooltip').text(($('.tooltip').text() === 'Sign up') ? 'Login' : 'Sign up');
	// Switches the forms  
	$('.login-register').animate({
		height: "toggle"
		, 'padding-top': 'toggle'
		, 'padding-bottom': 'toggle'
		, opacity: "toggle"
	}, "slow");
});
$('.footer a').click(function () {
	// Switches the forms  
	$('.card-container').children('.toggle').toggle();
	$('.login-reset').animate({
		height: "toggle"
		, 'padding-top': 'toggle'
		, 'padding-bottom': 'toggle'
		, opacity: "toggle"
	}, "slow");
});