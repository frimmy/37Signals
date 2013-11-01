$(function () {
    $('#box-bc').hover(
    	function () {
            
            $('#modal').hide();
            $('#bc').show();
        
        }, function () {
            
    		$('#modal').show();
            $('#bc').hide();
        
        });

    $('#box-hr').hover(
    	function () {
            
            $('#modal').hide();
            $('#hr').show();
        
        }, function () {
            
    		$('#modal').show();
            $('#hr').hide();
        
        });

    $('#box-cf').hover(
    	function () {
            
            $('#modal').hide();
            $('#cf').show();
        
        }, function () {
            
    		$('#modal').show();
            $('#cf').hide();
        
        });
});