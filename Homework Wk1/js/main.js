/*
     Name: David Offenbacher
     Date: 03/05/2015
     Class & Section:  WIA-WDD333-O Section-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/


/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message

********************************************/

Modernizr.load({
	test: Modernizr.canvas,
	yep: "js/main.js",
	nope: "js/fail.js",
	complete: function(){
		
		console.log("The test is complete");
		
		}
	
	});

	console.log(Modernizr);

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.

********************************************/

//Draw Rectangle here

window.onload = function(){
	var theCanvas1 = document.getElementById("Canvas1");
	var ctx1 = theCanvas1.getContext('2d');
	
	ctx1.fillStyle = "blue";
	ctx1.strokeStyle = "black";
	ctx1.lineWidth = 5;

	ctx1.strokeRect(0, 0, 50, 100);
	ctx1.fillRect(0, 0, 50, 100);


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method

********************************************/


//Draw Circle here

	var theCanvas2 = document.getElementById("Canvas2");
	var ctx2 = theCanvas2.getContext('2d');
	
	ctx2.fillStyle = "red";
	ctx2.strokeStyle = "black";
	ctx2.lineWidth = .5;

	var degrees = 360;
	var radians = (degrees/180)*Math.PI;
	
	ctx2.beginPath();
	ctx2.arc(50, 50, 20, 0, radians);
	ctx2.fill();
	ctx2.stroke();


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

	var theCanvas3 = document.getElementById("Canvas3");
	var ctx3 = theCanvas3.getContext('2d');

	var length = 20;

	ctx3.beginPath();
	ctx3.translate(100, 100);
	ctx3.rotate((Math.PI * 1 / 10));
	

	for (var i = 5; i--;) {
	    ctx3.lineTo(0, length);
	    ctx3.translate(0, length);
	    ctx3.rotate((Math.PI * 2 / 10));
	    ctx3.lineTo(0, -length);
	    ctx3.translate(0, -length);
	    ctx3.rotate(-(Math.PI * 6 / 10));
	};
		
		ctx3.lineTo(0, length);
		ctx3.closePath();
		ctx3.strokeStyle = '#ff0000';
		ctx3.stroke();


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

	var theCanvas4 = document.getElementById('Canvas4');
		if (theCanvas4 && theCanvas4.getContext) {
			var ctx4 = theCanvas4.getContext("2d");
			if(ctx4){
				ctx4.strokeStyle = "red";
				ctx4.fillStyle = "red";
			
				ctx4.beginPath();
				ctx4.moveTo(20, 150);
				ctx4.bezierCurveTo(75, 0, 155, 35, 180, 150);
				ctx4.stroke();
			
				ctx4.beginPath();
				ctx4.moveTo(20, 150);
				ctx4.bezierCurveTo(40, 120, 55, 120, 60, 150);
				ctx4.stroke();
			
				ctx4.beginPath();
				ctx4.moveTo(60, 150);
				ctx4.bezierCurveTo(80, 120, 95, 120, 100, 150);
				ctx4.stroke();
			
				ctx4.beginPath();
				ctx4.moveTo(100, 150);
				ctx4.bezierCurveTo(120, 120, 135, 120, 140, 150);
				ctx4.stroke();
			
				ctx4.beginPath();
				ctx4.moveTo(140, 150);
				ctx4.bezierCurveTo(160, 120, 165, 120, 180, 150);
				ctx4.stroke();
			
			}
		}
		

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

	var theCanvas5 = document.getElementById("Canvas5");
	var ctx5 = theCanvas5.getContext('2d');

	var theString = "This is what it looks like to draw text on a canvas!!!";

	ctx5.font="28pt Georgia";
	ctx5.fillStyle = "orange";
	ctx5.strokeStyle = "rgb(255,0,255)";
	ctx5.fillText(theString, 20, 120);
	ctx5.strokeText(theString, 20, 120);
	

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

	var theCanvas6 = document.getElementById('Canvas6');
	if (theCanvas6 && theCanvas6.getContext) {
		var ctx6 = theCanvas6.getContext("2d");
		if(ctx6){
			var srcImg = document.getElementById("img1");
			
			// Display full image
			ctx6.drawImage(srcImg, 0, 0);
			//Scaled down 50%
			ctx6.drawImage(srcImg, 0, 1200, 1650, 544);
			//Sliced Section 
			ctx6.drawImage(srcImg, 1555, 555, 555, 100, 0, 1800, 500, 200);
		}
	}
	

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

	var theCanvas7 = document.getElementById("Canvas7");
	var ctx7 = theCanvas7.getContext('2d');

	var length = 20;

	ctx7.beginPath();
	ctx7.translate(100, 100);
	ctx7.rotate((Math.PI * 1 / 10));
	
	for (var i = 5; i--;) {
	    ctx7.lineTo(0, length);
	    ctx7.translate(0, length);
	    ctx7.rotate((Math.PI * 2 / 10));
	    ctx7.lineTo(0, -length);
	    ctx7.translate(0, -length);
	    ctx7.rotate(-(Math.PI * 6 / 10));
	};
		
		ctx7.lineTo(0, length);
		ctx7.closePath();
		ctx7.strokeStyle = 'blue';
		ctx7.stroke();
		


	var theCanvas7 = document.getElementById("Canvas7");
	var ctx7 = theCanvas7.getContext('2d');

	var theString = "STAR";

	ctx7.font="28pt Georgia";
	ctx7.fillStyle = "orange";
	ctx7.strokeStyle = "rgb(255,0,255)";
	ctx7.fillText(theString, -30, 0);
	ctx7.strokeText(theString, -30, 0);
	
	
	
	var theCanvas7 = document.getElementById('Canvas7');
    	if (theCanvas7 && theCanvas7.getContext) {
        	var ctx7 = theCanvas7.getContext("2d");
        	var centerX = theCanvas7.width / 2;
        	var centerY = theCanvas7.height / 2;
        	var radius = 90;
        	
        		if (ctx7) {            
					ctx7.beginPath();
					ctx7.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
					ctx7.fillStyle = "orange";
					ctx7.fill();
					ctx7.strokeStyle = "red";
					ctx7.stroke();
            
				}
			}



}//End