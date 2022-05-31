canvas = new fabric.Canvas("mc") ; 
// Create canvas variable

//Set initial positions for ball and hole images.
bally = 0 ; 
ballx = 0 ; 
holey = 400 ;
holex = 800 ; 


block_image_width = 5;
block_image_height = 5;

function load_img(){
	
	new fabric.Image.fromURL("golf-h.png" , function(Img)  {

		hole = Img ; 
		hole.scaleToWidth(50) ; 
		hole.scaleToHeight(50) ; 
		hole.set({

top:holey , left:holex

	});
canvas.add(hole);
	});
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	new fabric.Image.fromURL("ball.png" , function(Img)  {

		ball = Img ; 
		ball.scaleToWidth(50) ; 
		ball.scaleToHeight(50) ; 
		ball.set({

top:bally , left:ballx

	});
canvas.add(ball);
	});
	
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */

	if((bally==holey)&&(ballx==holex)){
canvas.remove(ball) ; 
document.getElementById("hd3").innerHTML = "you have hit the goal!!!!!!!!!!!!!!!!!!!!" ; 
document.getElementById("mc").style.borderColor = "red" ; 

	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bally>=0){

bally = bally - 10 ;
canvas.remove(ball) ;  
new_image()



		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(bally<=450){

			bally = bally + 10 ;
			canvas.remove(ball) ;  
			new_image()
			
			
			
					
	}

	function left()
	{
		if(ballx >5)
		{
			// Write a code to move ball left side.
			ballx = ballx - 10 ;
				canvas.remove(ball) ;  
				new_image()

				
				
				
				
						
		}
		}
	}

	function right()
	{
		if(ballx <=1050)
		{
			// Write a code to move ball right side.
			ballx = ballx + 10 ;
				canvas.remove(ball) ;  
				new_image()
		}
	}
	
}

