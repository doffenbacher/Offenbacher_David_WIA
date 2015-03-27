$(document).ready(function(){	 	
                 		
});

if(Modernizr.canvas){

	var c1 = document.getElementById('canvas1');
	var c1ctx = c1.getContext('2d');
	var imageObj1 = new Image();

	imageObj1.onload = function() {
	c1ctx.drawImage(imageObj1, -50, -225);
	  };
	imageObj1.src = "images/phone1.jpg"; /*-- http://becuo.com/blue-phone-icon --*/


	var c2 = document.getElementById('canvas2');
	var c2ctx = c2.getContext('2d');
	var imageObj2 = new Image();

	imageObj2.onload = function() {
	c2ctx.drawImage(imageObj2, -75, -235);
	  };
	imageObj2.src = "images/email1.jpg"; /*-- https://www.iconfinder.com/icons/370078/communication_email_envelope_letter_mail_message_sms_icon#size=128 --*/

	
	}else {
		$('#canvas1').html("<p>Your browser does not support HTML5 Canvas.</p><p>Click <a href='mailto:fbatzer@gmail.com'>Here</a> to send an email to Fran Batzer</p>");			
	}

if(Modernizr.video){
	console.log('Video is supported');
			
	}else {
		$('#video').html("<p>Your browser does not support this Video Format</p><p>CLICK <a href='http://youtu.be/5eXWzgm7y-k'>HERE</a> to watch the how to video on Green Grass Juicing on YouTube</p>");
	
	}

