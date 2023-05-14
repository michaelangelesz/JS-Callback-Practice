const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
let direction = null; //create direction variable
let x = 100; //create x variable to track horizontal position
let y = 250; //create y variable to track vertical position
move(character).to(100, 250)

//add anonymous function to set repeating timer to execute code, enabling our character to move continuously on the screen based on the current direction
setInterval(function(){ 
    //this code checks if the direction variable is west and moves our character one pixel to the left on the screen if it is
    if(direction === 'west'){
        x = x - 1
    }
    //this code checks if the direction variable is north and moves our character one pixel up on the screen if it is
    if(direction === 'north'){
        y = y + 1
    }
    //this code checks if the direction variable is east and moves our character one pixel to the right on the screen if it is
    if(direction === 'east'){
        x = x + 1
    }
    //this code checks if the direction variable is south and moves our character one pixel down on the screen if it is
    if(direction === 'south'){
        y = y - 1
    }
    //this code updates the position of our character on the screen using the x and y variables
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)