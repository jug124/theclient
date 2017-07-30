$(document).ready(function(){
	
	function animate() {
        $('#container .header h1').animate({top:'42%'}, 1500, function(){
            $('#container .header h1').animate({top:'50%'}, 1500, function(){
            	animate();
            });
        });
    }
    animate(); 
	
	// halfObject
	var halfObject = function(){
		var brandWidth = ($('#container .header h1').width() / 2);
		var brandHeight = ($('#container .header h1').height() / 2);
		$('#container .header h1').css({
			'margin-left': -brandWidth + "px",
			'margin-top': -brandHeight + "px"
		});
		
		var brandWidthParagraph = ($('#container .header p').width() / 2);
		var brandHeightParagraph = ($('#container .header p').height() / 2);
		$('#container .header p').css({
			'margin-left': -brandWidthParagraph + "px",
			'margin-top': -brandHeightParagraph + "px"
		});
		
		var contentWidth = ($('#container #content .content').width() / 2);
		var contentHeight = ($('#container #content .content').height() / 2);
		$('#container #content .content').css({
			'margin-left': -contentWidth + "px",
			'margin-top': -contentHeight + "px"
		});
	}
	halfObject();
	
	
	// Start Javascript for Subscription Form =============================================
	
	$('#error').hide();
	$('#success').hide();
	
	$('.subscriptionForm').submit(function(){
		var email = $('#email-subscribe').val();
		$.ajax({
		url:'email.php',
		type :'POST',
		dataType:'json',
		data: {'email': email},
			success: function(data){
				if(data.error){
					$('#error').fadeIn();
				}else{
					$('#success').fadeIn();
					$("#error").hide();
				}
			}
		})
		return false;
	});
	
});