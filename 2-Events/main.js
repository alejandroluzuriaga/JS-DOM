//There are two ways of treating events. 

                        //1 ----------------- Create functions in JS and use them in the attributes of the HTML
                        // HTML used for 1st part:

                                            // <body>
                                            //     <h1>Events 💻</h1>

                                            //     <button onclick="onButtonClicked()">Click me!</button>
                                            //     <input oninput="onInputChanged(this)" type="text" placeholder="Write whatever you want! :)">

                                            //     <h3 id="input-text"></h3>
                                            //     <script src="./main.js"></script>
                                            // </body> 


let inputValue = ''

// const onInputChanged = (input) =>{ //input.value is always an attribute that contains the text of the input
//     console.log(input.tar) //Returns on console what is the value of the input when changed
//     inputValue = input.value //Assigns the input at the moment to varible "inputValue"

//     const inputTextH3 = document.querySelector('#input-text') //selects 'h3' element
//     inputTextH3.innerText = inputValue //changes its value to be shown in the web everytime input changes
// }

const onButtonClicked = () =>{
    alert(`Input value is: ${inputValue}`) //When button clicked, will show on console what the input is
}

// What is the problem with this? Its not a bad practice to do it this way, but we're mixing JS in HTML and HTML in JS too much. 
//So its better to try to keep separated JS and HTML as much as we can. How? With LISTENERS

                        //2 ----------------- Listeners
                                                // HTML used for 2nd part:

                                            //     <body>
                                            //     <h1>Events 💻</h1>
                                            
                                            //     <button>Click me!</button>
                                            //     <input
                                            //       oninput="onInputChanged(this)"
                                            //       type="text"
                                            //       placeholder="Write whatever you want! :)"
                                            //     />
                                            
                                            //     <h3 id="input-text"></h3>
                                            //     <script src="./main.js"></script>
                                            //   </body>

//EVERY addEventListener second parameter's function should receive 'event' as parameter. OnInputChanged = (event)
//event.target is a reference to the element launching the event. Thats why (event.target).value contains actual input

const onInputChanged = (event) =>{ //New 'onInputChanged' changed function
    inputValue = (event.target).value 

    const inputTextH3 = document.querySelector('#input-text') 
    inputTextH3.innerText = inputValue
}
const buttonElement = document.querySelector('button')
buttonElement.addEventListener('click', onButtonClicked) //Parameter 1: type of event. Parameter 2: function

const inputElement = document.querySelector('input[type="text"]')
inputElement.addEventListener('input', onInputChanged)