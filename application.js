$(function () {
    $('#box-bc').hover(function () {
        $('#modal,#bc').toggle();
        });

    $('#box-hr').hover(function () {
    	$('#modal, #hr').toggle();
        });            

    $('#box-cf').hover(function () {
    	$('#modal,#cf').toggle();
        });
            
    // Display current day of the week
    var daynum = new Date().getDay();
    var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var day = dayArray[daynum];

    $('#greeting').html("Happy "+day);
});