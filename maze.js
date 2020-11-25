const mazeLevelOne = `**************S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....*********************`

for (let element of mazeLevelOne){
    const maze = document.createElement('div')
  
document.body.appendChild(maze)
    if (element === "*") {
        maze.className = 'walls'
    } if(element === "."){
        maze.className = "paths"
    } if(element === "S"){
        maze.className = "startingPoint"
    } if(element === "T"){
        maze.className = "treasure"
    }
 
}

const player = document.createElement('div');
player.className = "player"
document.querySelector("body > div:nth-child(17)").appendChild(player) /* make sure the player appears on the right tile*/

let positionPlayer = 17;


document.body.addEventListener('keydown', function(e) {


    if (e.code === 'ArrowUp') {
        console.log(e)
        positionPlayer -= 13
        if (document.querySelector('body > div:nth-child(' + positionPlayer + ')').classList.contains('walls')) {
            positionPlayer += 13
            document.querySelector('body > div:nth-child(' + positionPlayer + ')').appendChild(player)
        } else {
            document.querySelector('body> div:nth-child(' + positionPlayer + ')').appendChild(player)
        }

    }

    if (e.code === 'ArrowDown') {
        console.log(e)
        positionPlayer += 13
        if (document.querySelector('body > div:nth-child('+ positionPlayer +')').classList.contains('walls')) {
            positionPlayer -= 13
            document.querySelector('body > div:nth-child('+ positionPlayer +')').appendChild(player)
        }else {
            document.querySelector('body > div:nth-child('+ positionPlayer +')').appendChild(player)
        }


    }

        if (e.code === 'ArrowRight'){
        console.log(e)
        positionPlayer++
        if (document.querySelector("body > div:nth-child("+ positionPlayer +")").classList.contains('walls')){
            positionPlayer -= 1
            document.querySelector('body > div:nth-child('+ positionPlayer +')').appendChild(player)
        }else {
            document.querySelector('body > div:nth-child('+ positionPlayer +')').appendChild(player)
        }
    }

    if (e.code === 'ArrowLeft') {
        console.log(e)
        positionPlayer--
        if (document.querySelector('body > div:nth-child('+ positionPlayer +')').classList.contains('walls')) {
            positionPlayer += 1
            document.querySelector('body > div:nth-child('+ positionPlayer +')').appendChild(player)
        } else {
            document.querySelector('body > div:nth-child('+ positionPlayer +')').appendChild(player)
        }


    }

    if(document.querySelector('body > div:nth-child('+ positionPlayer +')').classList.contains('treasure')) {
        alert('thank u for helping Chihiro find her parents') 
    }

    
    if(document.querySelector('body > div:nth-child('+ positionPlayer +')').classList.contains('treasure')) {
        const p = document.createElement('p')
        body.appendChild(p)
        p.textContent = "You have passed all the levels, congrats"
        p.className = 'finish' 
    }
  


    if (positionPlayer == treasure) {
            body.main = "<video autoplay muted> <source src='images/chihiro.mp4' type='video/mp4' /></video>"
            setTimeout(function(){ document.querySelector("body > main > video").style.display = location.reload() }, 2000);
            }

           
    
}) 






