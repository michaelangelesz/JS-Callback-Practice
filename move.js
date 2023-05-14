function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
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

