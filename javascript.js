// Fire Floodlight on click
$(document).on('click', '#link', function(){
	//fire Floodlight
	floodlight();
});

// Append floodlight iframe to body
function floodlight(){
	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	$('body').append('<iframe src="https://12345.fls.doubleclick.net/activityi;src=12345;type=nhtsa00;cat=nhtsa0;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
}
