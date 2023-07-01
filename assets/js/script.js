// Select the canvas Element
//let theCanvas = document.getElementById("my-canvas"),

// Select the place that you want to draw inside
    //theContext = theCanvas.getContext("2d");

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

/*

//Advanced Examples And new Methods 


let theCanvas = document.getElementById("my-canvas"),

    theContext = theCanvas.getContext("2d");

theContext.beginPath();

theContext.moveTo(100,100);    // starting points are from x = 100 and y = 100 and please be note these are starting points
//theContext.moveTo(100,0);    // starting points are from x = 100 and y = 0 and please be note these are starting points
//theContext.lineTo(0,0);         // the it's end way points are to x = 0 and y = 0 and please be note these are to end way points
//theContext.lineTo(650,400);         the it's end way points are to x = 650 and y = 400 and please be note these are to end way points

//below the four lines are drawing a design to see
theContext.lineTo(100,300);         // the it's end way points are to x = 100 and y = 300 and please be note these are to end way points
theContext.lineTo(300,300);         //the it's end way points are to x = 300 and y = 300 and please be note these are to end way points
theContext.lineTo(400,200);         //the it's end way points are to x = 400 and y = 200 and please be note these are to end way points

//theContext.lineTo(100,100);         //the it's end way points are to x = 100 and y = 100 and please be note these are to end way points

// new Function to close your path to the start point it's extention to previous line:
theContext.closePath();

// color the borders and styling
theContext.lineWidth = 8;
theContext.strokeStyle = "red";

// to draw the line
theContext.stroke();

// fill the shape 

theContext.fillStyle = "green";  // you can choose from the three ways to fill
theContext.fill();  // this method use to fill the shap with your set fill style if you if you don't set it it will set by default black

*/




/*
// Start to draw Circle with Canvas

let theCanvas = document.getElementById("my-canvas"),
    theContext = theCanvas.getContext("2d");

// begin the path
theContext.beginPath();

// border styling
theContext.lineWidth = 8;
theContext.strokeStyle = "red";


// start the circle

//theContext.arc(theCanvas.width / 2, theCanvas.height / 2, 150, 0, Math.PI );   // it needs (x = the circle center x , y = the circle center y , radius, start engle = 3 oclock, end angle = 2 * Math.PI)

// draw circle anti clock wise

//theContext.arc(theCanvas.width / 2, theCanvas.height / 2, 150, 0, 5.28319, true ); // by default the true is false

// draw half of half circle
theContext.arc(theCanvas.width / 2, theCanvas.height / 2, 150, 0, 0.5 * Math.PI);


// Draw The Line
theContext.stroke();

/*
    - 360 degree = full circle
    - 1 radian = half circle  = 180 degree => 3.141592653589793       Math.PI
    - radians => 2 radians = 360 degree   =>  6.283185307179586         Math.PI * 
    - set the full circle variable => let theCircle = 2 * Math.PI // then you can use it easy to call half or 60% or 40% or 80% from the circle


*/

/*
// Shadow Methods:

let theCanvas = document.getElementById("my-canvas"),
    theContext = theCanvas.getContext("2d");

    
    // Shadow Color: you can use color name or rgba
    theContext.shadowColor = "rgba( 0 , 0 , 0 , .5)";

    // Shadow Blur:
    theContext.shadowBlur = 50;

    //Control the place of shadow
    //theContext.shadowOffsetX = 30;  // the default value is behind the element exactly so it's hide by default
                                      //if you don't use blur so the shadow is a solid color
    //theContext.shadowOffsetX = -30; // it accepts negative values to move to other side

    //theContext.shadowOffsetY = -30;
    //theContext.shadowOffsetY = 30;

    theContext.fillStyle = "green";
    theContext.fillRect(50, 50, 200, 100);


    // Shadow Color:
    theContext.shadowColor = "black"

    // Shadow Blur:
    theContext.shadowBlur = 20;

*/

/*
// Transformation and save + restore 

let theCanvas = document.getElementById("my-canvas"),
    theContext = theCanvas.getContext("2d");

    // the first and original box
    theContext.fillStyle = "green";
    theContext.fillRect(50, 50, 200, 100);
    //theContext.fillRect(98, 98, 200, 100);

    //here to save the clean state of context without any scale or anything
    theContext.save(); 

    //scale: is to extend width and height of the element
    theContext.scale(2, 2);   //if you put (1, 1) that's meaning 100%, 100% so no change on element status
                                // scale also will effect on x and y start point so you will move it because it's meaning 200%, 200%
    theContext.fillStyle = "red";
    theContext.fillRect(50, 50, 200, 100);

    // Second box
    // here the scale will effect on below rectangle because all the rectangle after initial the scale it's gonna effect it
    // you can before the scale write a method ( go to before the scale) 

    theContext.fillStyle = "yellow";
    theContext.fillRect(50, 50, 200, 100);

    // Restor the clean state without any scale or anything
    theContext.restore();

    // Third box
    // trnsformation (translate) it will move the element from the place that the elemene is
    theContext.translate(80, 80);  // it needs x, y from the place that you are (70,70) NOT from the canvas start,
    //and it will increase 80, 80 or the 70,70
    theContext.fillStyle = "yellow";
    theContext.fillRect(70, 70, 200, 100);

*/


/*
// Text Align And Direction

let theCanvas = document.getElementById("my-canvas"),
    theContext = theCanvas.getContext("2d");

// if you want to change alpha of any element inside canvas you can use:

theContext.globalAlpha = 0.5;   // from 0.0 to 1.0 and it's globaly for all your Canvas


// to draw the line inside the canvas
theContext.strokeStyle = "#AAA";
theContext.lineWidth = 5;
theContext.moveTo(300,0);
theContext.lineTo(300, 400);
theContext.stroke();

theContext.direction = "rtl";  // to change the direction inside the canvas right to left // it will effect on start and end values of text align
                                    // but it will not effect on left and right

theContext.font = "30px Lora"
theContext.fillStyle = "#F00"


// now we set the properties of text align
theContext.textAlign = "start";    // the default value is start, the start meaning it's starting from the place that you set it from fillText
theContext.fillText("Start", 300, 50);   // it needs three things ("write the text", x , y);    



theContext.textAlign = "end";  
theContext.fillText("End", 300, 100); 



theContext.textAlign = "center";  
theContext.fillText("Center", 300, 150); 


theContext.textAlign = "left";  
theContext.fillText("left", 300, 200); 

theContext.textAlign = "right";  
theContext.fillText("right", 300, 250); 

*/
