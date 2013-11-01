$(function () {
    $('#box-bc').hover(function () {
        $('#modal').toggle();
        $('#bc').toggle();
        });
    // , function () {
            
    // 		$('#modal').show();
    //         $('#bc').hide();
        
    //     });

    $('#box-hr').hover(function () {
    	$('#modal').toggle();
        $('#bc').toggle();
        });            
      //       $('#modal').hide();
      //       $('#hr').show();
        
      //   }, function () {
            
    		// $('#modal').show();
      //       $('#hr').hide();
        
      //   });

    $('#box-cf').hover(function () {
    	$('#modal').toggle();
        $('#bc').toggle();
        });
            
      //       $('#modal').hide();
      //       $('#cf').show();
        
      //   }, function () {
            
    		// $('#modal').show();
      //       $('#cf').hide();
        
      //   });
    // Display current day of the week
    var daynum = new Date().getDay();
    var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var day = dayArray[daynum];

    $('#greeting').html("Happy "+day);
});