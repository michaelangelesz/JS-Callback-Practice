function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    //defines function that will be used to implement the movement functionality for elements 
    function moveWithArrowKeys(left, bottom){
        let direction = null;
        let x = left;
        let y = bottom;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            //if direction variable input is left arrow keypress, the character is then moved west (left) on the screen
            if(direction === 'west'){
                x-=1
            }
            //if direction variable input is an up arrow keypress, the character is then moved north (up) on the screen
            if(direction === 'north'){
                y+=1
            }
            //if direction variable input is right arrow keypress, the character is then moved east (right) on the screen
            if(direction === 'east'){
                x+=1
            }
            //if direction variable input is an down arrow keypress, the character is then moved south (down) on the screen
            if(direction === 'south'){
                y-=1
            }
            //these 2 lines update the position of our character on the screen using the x and y variables
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        //repeating timer to execute code, enabling our character to move continuously on the screen based on the current direction, instead of just once per refresh
        setInterval(moveCharacter, 1)
        
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
    }
    
    return {
        to: moveToCoordinates,
        //attaches new function to the object we return
        withArrowKeys: moveWithArrowKeys
    }        
}