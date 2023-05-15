const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')

//add callback function that will be executed each time the direction variable of our green character changes
function handleDirectionChange(){
    //modifies the character's image when it changes direction so it appears to walk by checking the value of the direction variable (which key pressed) and changes the source of the character image accordingly
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

//moves character element on the screen by calling the move function with the character element as its argument
//added handleDirectionChange as a callback function passed to withArrowKeys, which updates the src of the character image based on the current direction each time the user presses an arrow key to change the direction of the character element
move(character).withArrowKeys(100, 250, handleDirectionChange)

//in the following lines, the .to can be replaced with .withArrowKeys (as in line example above) to give each element the same movement functionality as our green character. 
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)