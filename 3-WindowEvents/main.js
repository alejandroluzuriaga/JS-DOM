//Window Events will be explained with a game.
//Will be putting some <p>'s in different positions in the screen. The user will have 30s to just pass the mouse above all of them.
//When is done, a scroll bar will be activated and will allow him to go down. 
//At the bottom of the web is going to see a 'prompt' alert where he'll need to write a secret password. If its ok, then he win the game.

const pTextList = []
const onMouseMove = (event) =>{
    // console.log(event.target.tagName) //Shows in console WHERE is the mouse passing (BODY, DIV, P, etc)
    if (event.target.tagName === 'P'){
        if (!pTextList.includes((event.target).className)){ //arrayMethod that returns true if array includes the parameter
            pTextList.push((event.target).className)

            if (pTextList.length === 5){
                document.body.style.height = '200vh';
        }
    }
    // console.log(pTextList)
}
}

const onScroll = () =>{
    if(window.scrollY > window.outerHeight/2){ //outerHeight -> max-height of the web. innerHeight -> max-height visible (before scrolling for example)
        const password = prompt('Write the right password, ¡fast!')

        if (password === '1234'){
            secretButton.style.display = 'block'
        }
    }
}

window.addEventListener('mousemove', onMouseMove)
window.addEventListener('scroll', onScroll)

const onCompleteGame = () =>{
    alert('You WON!✔✔')
}

const secretButton = document.querySelector('#secret-button') //
secretButton.addEventListener('click', onCompleteGame)

//Summary: we created a window event of moving the mouse. The function calculates when the mouse is passing on a <p> and its adding
// it to a list without repetition, to check when we visited all of them. When all visited, body doubles its height, creating a scroll.
//We created a window event of scrolling that calculates when the scroll is more than the middle of the visible web, and when it does, 
// shows a prompt asking for a password. If the password is ok, then it will display the secretButton hidden at the beginning in CSS.
// We created another window event for clicking the secretButton that returns 'You WON!' in console.