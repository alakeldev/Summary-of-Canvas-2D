// Select the canvas Element
let theCanvas = document.getElementById("my-canvas");

// Select the place that you want to draw inside
    theContext = theCanvas.getContext("2d");



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


