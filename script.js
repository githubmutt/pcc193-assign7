// GLOBALS
var ctx         // Canvas context 
var canvas       // Canvas 
var oldX, oldY   // old x,y coordinates (start of path)
var newX, newY   // new x,y coordinates (end of path)
var flag          // true: mouse down   false: mouse up

// LINE colors
var colors = ["#3a3cd3", "#d716e9",  "#3cee11" ,"#c3da25", "#4407f8"]
 function debug(text){

  //  console.log(text)
 }

// So lines exactly follow mouse
// https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
function getMousePos( evt){

   var rect = canvas.getBoundingClientRect()
   return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top

   }


}
function handleMouseMove(evt){

    // select color from Color Wheel
    var colorwheel = ()=> {
                let r = Math.floor(Math.random() * colors.length)            
                debug("color = " + colors[r] + " (" + r + ")")
                return colors[r]

    }

    // if mouse is UP, don't draw, return immediately
    if(!flag) return

    debug(evt)
    // get the new mouse coordinates
    var coord = getMousePos( evt)
    newX = coord.x //evt.clientX
    newY = coord.y //evt.clientY

    // Draw the line
    ctx.beginPath
    ctx.moveTo( oldX, oldY)
    ctx.lineTo( newX, newY)
    ctx.strokeStyle = colorwheel()  //"#3a2cd3"
    ctx.lineWidth = "4";
    ctx.stroke()

    // REFRESH
    // old mouse coordinates
    oldX = newX
    oldY = newY

}

function handleMousePressed(evt){
    // starting coordinates of draw

    var coord = getMousePos( evt)
    oldX = coord.x
    oldY = coord.y

    // mouse is down        
    flag = true

}

function handleMouseReleased(evt){

    // mouse is up, stop drawing
    flag = false

}

function clearSignature(){

        debug("clearSignature")
        ctx.save()
        ctx.setTransform(1,0,0,1,0,0)
        ctx.beginPath()
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.restore()

 }



     
