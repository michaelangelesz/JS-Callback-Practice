function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    //defines new function that will be used to implement the same functionality for other elements 
    function moveWithArrowKeys(left, bottom){
       
    }

    return {
        to: moveToCoordinates,
        //attaches new function called withArrowKeys to the object returned by the move function
        withArrowKeys: moveWithArrowKeys
    }        
}


//add event listener for keydown (user presses an arrow key)
document.addEventListener('keydown', function(e){     
    //ensures that the direction variable is updated only once per arrow key press, and not continuously if the user holds down the key  
    if(e.repeat) return;

    //adds functionality to update direction variable based on the arrow key pressed. if user presses the left arrow, our character moves west, and so on
    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})

//add a keyup event listener to allow our character to move with the arrow keys intuitively (essentially makes him stop moving forever in the same direction even after keyup)
document.addEventListener('keyup', function(e){
    direction = null
})
