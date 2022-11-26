//querySelector('tag') returns an element with that tag, or null if is not found. (tag -> selector, .tag -> class, #tag -> id)
//querySelectorAll('tag') returns an 'array' of elements with that tag, or empty. (tag -> selector, .tag -> class)
//getElementById('id') returns an element with that id, or null if is not found.
//getElementsByClassName('class') returns an 'array' of elements with that class, or empty.
//innerText modifies its inner text. innerHTML modfies its innerHTML. 
//element.attribute = 'value' -> if the element has that attribute, will replace it with 'value'


console.log("Hello, I'm JavaScript")

const title = document.querySelector('h1') //Returns the FIRST element h1 of HTML file
console.log(title)
title.innerText = 'Learning selectors with JS' //Allows you to change the text in the variable selected with querySelector

const secondTitle = document.querySelector('h2:last-of-type') //Returns the LAST element h2 (Second in this case)
console.log('secondTitle:',secondTitle)

// const elementByID = document.getElementById('ID-second-h2') //Getting an element by its ID. Highly recommended to use IDs.
const elementByID = document.querySelector('#ID-second-h2') //querySelector and getElementById work almost the same. But querySelector
                                                            //allows us to use CSS selector and i've been told that I'm going to use it pretty much
                                                            // everytime.
console.log('element by ID is: ', elementByID)

// const technologies = document.getElementsByClassName('technology') //Returns something similar to an array. But not quite. 
                                                                //Its similar, but not the same.

const technologies = document.querySelectorAll('.technology') //querySelectorAll and getElementByClassName work almost the same too. But querySelectorAll
                                                            //allows us to use CSS selector.

console.log('Technology array is:', technologies)

for(let i = 0; i<technologies.length; ++i){ //Using FOR loop to modify the innerText of each element of 'technologies'
    const technology = technologies[i];
    const prevText = technology.innerText
    technology.innerText = `${i + 1 } - ${prevText}`;
 }


const INSTAGRAM_URL = 'https://www.instagram.com/'
const titleLink = document.querySelector('h2.instagram-link > a') //Returns the element that is in a 'h2', with a class 'instagram-link' and has a child 'a'
console.log(titleLink)
titleLink.href = INSTAGRAM_URL; //Modifies 'titleLink' attribute 'href'.