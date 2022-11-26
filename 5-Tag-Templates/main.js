const QUOTES = [
    {
        quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        author: 'Author 1',
        year: 2022,
    },
    {
        quote: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        author: 'Author 2',
        year: 2013,
    },
    {
        quote: "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        author: 'Author 3',
        year: 2005,
    },
    {
        quote: "Contrary to popular belief, Lorem Ipsum is not simply random text",
        author: 'Author 4',
        year: 2009,
    },
    {
        quote: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        author: 'Author 5',
        year: 2011,
    }
]

const getQuoteTemplate = (quote, author, year) =>{ // Returns HTML code to insert a quote with parameter values.
    return `<div class="quote-block">
    <blockquote>${quote}</blockquote>
    <p>${author} - ${year}</p>
    </div>`
}
const quotesList = document.querySelector('#quotes-list') // THIS controls the div where we are going to put the quote objects.

const setUpQuotesList = () =>{ //Fills quoteElement array with QUOTES's elements.
    for(let i = 0; i < QUOTES.length; ++i){
        const quoteElement = QUOTES[i];
        quotesList.innerHTML += getQuoteTemplate(quoteElement.quote, quoteElement.author, quoteElement.year);
    }
}

const handleFormSubmit = (event) =>{ //Event for submitting the form. Creates new quote element, and modifies its innerHTML with new quote values.
    event.preventDefault(); //Preventing to reload the web when submitting
    const formElements = event.target.elements;

    const newQuote ={
        author: formElements.author.value,
        quote: formElements.quote.value,
        year: formElements.year.value,
    }
    quotesList.innerHTML += getQuoteTemplate(newQuote.quote, newQuote.author, newQuote.year);
    event.target.reset();
}
const form = document.querySelector('#quote-form')

form.addEventListener('submit', handleFormSubmit)
setUpQuotesList();
