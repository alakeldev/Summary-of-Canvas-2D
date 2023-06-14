// Select the canvas Element
let theCanvas = document.getElementById("my-canvas"),

// Select the place that you want to draw inside
    theContext = theCanvas.getContext("2d");

/*
theGradient = theContext.createLinearGradient(0, 0, 100, 0);


theGradient.addColorStop(0, "red"); 
theGradient.addColorStop(1, "blue");


//theContext.fillStyle = "#F00" ;

//theContext.fillRect(0, 0, 200, 100);
*/

/*
Choose Fill Style:
- Fill it by colors
- Fill it by Gradient
- Fill it by Pattern
*/ 



/*
1- By Colors , /if you choose the fill style and you don't set color so the default value is BLACK color/

//theContext.fillStyle = "#F00" ;

//theContext.fillRect(10, 10, 200, 100); // Here to draw Rectangle, it needs four things (x, y, width, height) x the space move from the left
                                                //y the space move from the top

// If you want to make the Rectangle is Daynamic size and you want to fill the full size of Canvas and make it follow the sizes of canvas See below:
// theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);
*/



/*
2- By Gradients
    //theGradient = theContext.createLinearGradient(0, 0, 100, 100);   // it needs four things (x0, y0, x1, y1) if you set (0, 0, 0, 0)
// the gradient will not work because it's 0 it will start and end in same place 0

    x0 => Gradient Start From Left
    y0 => Gradient Start From Top
    x1 => Gradient End From Left
    y1 => Gradient End From Top


// Add Color Stops
//theGradient.addColorStop(0, "red");  // it need two things (offset number, color)
//theGradient.addColorStop(1, "blue");  // it need two things (offset number, color)

// choose fill style
//theContext.fillStyle = theGradient;


//theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);
*/



/*
3 - By Pattern

// Select The image

let theImage = document.getElementById("our-image");

// creat the pattern

let thePattern = theContext.createPattern(theImage, "repeat");   // it needs two things (image/video/another Canvas , repeat or repeatx or reapeaty, norepeat )

// choose fill style
theContext.fillStyle = thePattern; 

theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);
*/



/*
//Here It will make Rectangle with stroke mode not fill mode

// control line width:
theContext.lineWidth = 20;

// choose stroke style , please be note that you can use the gradiant in the stroke style
theContext.strokeStyle = "#F00"; 

theContext.strokeStyle = theGradient; 

// Draw Stroke Style and set it's place inside the canvas
theContext.strokeRect(20, 20, 200, 100);

*/

/*

// to write text inside canvas:

// 1 - set Font

theContext.font = "22px Lora"; //it needs two things font size, size type


// 2 - Creat Filled Text
theContext.fillStyle = "#F00"  // if you didn't set the fill style it will be by default BLACK
theContext.fillStyle = theGradient;
theContext.fillText("Hello Canvas", 50, 50);  //it needs four things (youtext, x:please you start from left, y:the place you start from top, Max width)


// 2 - Creat Stroke Text
theContext.strokeStyle = "#F00"  // if you didn't set the fill style it will be by default BLACK
theContext.strokeStyle = theGradient;
theContext.strokeText("Hello Canvas", 50, 50);  //it needs four things (youtext, x:please you start from left, y:the place you start from top, Max width)

// please use it without line width to see the right result of stroke text
theContext.lineWidth = 10;  // if you want to see the results of stroke make it without lineWidth:

*/


/*

// Canvas Width
let w = theCanvas.width,

// Canvas Height
    h = theCanvas.height

//Set Global Font
theContext.font = "30px Lora";

// Draw Chart Column

theContext.fillStyle = "#d35400";
theContext.fillRect(50, 50, 60, h - 50);
theContext.fillStyle = "#FFF"
theContext.fillText("1", 70, h - 10)

// Draw Chart Column
theContext.fillStyle = "#16a085";
theContext.fillRect(150, 100, 60, h - 100);
theContext.fillStyle = "#FFF"
theContext.fillText("2", 170, h - 10)

// Draw Chart Column
theContext.fillStyle = "#8e44ad";
theContext.fillRect(250, 150, 60, h - 150);
theContext.fillStyle = "#FFF"
theContext.fillText("3", 270, h - 10)
// Draw Chart Column
theContext.fillStyle = "#c0392b";
theContext.fillRect(350, 200, 60, h - 200);
theContext.fillStyle = "#FFF"
theContext.fillText("4", 370, h - 10)
// Draw Chart Column
theContext.fillStyle = "#27ae60";
theContext.fillRect(450, 250, 60, h - 250);
theContext.fillStyle = "#FFF"
theContext.fillText("5", 470, h - 10)
// Draw Chart Column
theContext.fillStyle = "#2c3e50";
theContext.fillRect(550, 300, 60, h -300);
theContext.fillStyle = "#FFF"
theContext.fillText("6", 570, h - 10)
*/


/*Path And Lines*/

//Begin the Path
//theContext.beginPath();

// From where you will start your drawing / Select the Start position

//theContext.moveTo(50,50);   //it needs two things (x,y) / here it will move from left as x and from top as y
//theContext.moveTo(0,0);   //it needs two things (x,y) / here it will move from left as x and from top as y
//theContext.moveTo(650,0);   //it needs two things (x,y) / here it will move from left as x and from top as y


// this method will draw points from your path /Select the path point

//theContext.lineTo(100,100);  //it needs two things (x,y), till path point place you want to draw
//theContext.lineTo(100,300);  //it needs two things (x,y), till path point place you want to draw
//theContext.lineTo(300,300);  //it needs two things (x,y), till path point place you want to draw
//theContext.lineTo(300,400);  //it needs two things (x,y), till path point place you want to draw



// adjust style and line width

//theContext.strokeStyle = "#00F"
//theContext.lineWidth = 5;

// last thing is to draw the path 

//theContext.stroke();  // default color is black



/*
//Example to Draw Envelope:

theContext.moveTo(0,0); 

theContext.lineTo(325, 170);

theContext.moveTo(650, 0);

theContext.lineTo(325, 170);



theContext.strokeStyle = "#00F"
theContext.lineWidth = 5;

theContext.stroke(); 

*/