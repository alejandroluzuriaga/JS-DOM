const TECHNOLOGIES = [
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'Vite',
    'TypeScript',
]

const setUpTechnologiesList = () =>{
    const listElement = document.createElement('ul') //Creating a 'ul' first
        listElement.className = 'technologies'

    for(let i = 0; i < TECHNOLOGIES.length; ++i){ // Then creating as 'li's as we have in array TECHNOLOGIES
        const technology = TECHNOLOGIES[i];

        const liElement = document.createElement('li'); //Creating li element

        const buttonElement = document.createElement('button'); //Creating button for delete element
        buttonElement.innerText = 'Delete';
        buttonElement.className = 'delete-button';

        liElement.innerText = technology; //Adding position i of array to its innerText
        listElement.append(liElement); //Adding liElement to listElement array
        liElement.append(buttonElement); //Adding 'delete' button to the liElement
    }
    document.body.append(listElement); //Adding listElement to the body of HTML
}

const handleDelete = (event) =>{
    console.log(event.target); // event.target is the botton to eliminate
    const liElement= event.target.parentElement; // access to his parent (liElement)
    liElement.remove(); // delete the liElement
}

const addDeleteButtonListerners = () => {
    const deleteButtons = document.querySelectorAll('.delete-button') //deleteButtons is like an array of delete buttons.
    for (let i = 0; i < deleteButtons.length; ++i){ //We check every delete button in the array
        const deleteButton = deleteButtons[i];
        deleteButton.addEventListener('click', handleDelete) //If the button receives a click, then --> handleDelete
    }
}

setUpTechnologiesList(); //Invoking function to create de Technologies 'ul' and 'li'
addDeleteButtonListerners() //Invoking function to listen to delete-buttons in each li.