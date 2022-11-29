// Its important to try making the less number of requests per time. Numerous requests comming from a specific site (ours) could be
//considered bot activity. We could be blocked by the API for that.

//That's why I used 'change' in the EventListener instead of 'input'. Requests only will be made when writing has stopped.

//Later I added a button to submit the request and limited them for the user to not make thousand request per minute.

//This test with PokeAPI also controls repetition of Pokemons in the web. If it exists, then wont make request to API.

const pokeAPI_URL =  'https://pokeapi.co/api/v2/pokemon/'
let currentPokemonID = 1;
let pokemonIDs = [];
let currentPokemon;
const searchInput = document.querySelector('#pokemon-input')
const buttonSearch = document.querySelector('#search-button')
const pokemonContainer = document.querySelector('.pokemon-container');

    const renderPokemon = () =>{ //Renderizes pokemon in the web
        const pokemonTemplate = 
            `<div class="pokemon">
            <h3>${currentPokemon.name}</h3>
            <span>ID: ${currentPokemon.id}</span>
            <img src="${currentPokemon.image}" alt="${currentPokemon.name}">
            </div>`
        pokemonContainer.innerHTML += pokemonTemplate;
    }
    const fetchPokemon = () =>{ //Goes to API, searches Pokemon's data by ID based on currentPokemonID and calls renderPokemon when currentPokemon is modified
        fetch(`${pokeAPI_URL}${currentPokemonID}`) //Fetch --> Local Scope.
        .then((res) => res.json()) //Fetch response is solved in a json, then we get the data we need from it to construct an object Pokemon.
        .then((response) => {
            currentPokemon = {
                name: response.name,
                id: response.id,
                image: response.sprites.front_default,
            };
        renderPokemon();
        })
        .catch((err) =>{
            console.log(`Something went wrong. Error --> ${err}`)
        });
    }

    const handleSearch = (event) =>{
        currentPokemonID = searchInput.valueAsNumber;
        if (!pokemonIDs.includes(currentPokemonID)){
            pokemonIDs.push(currentPokemonID);
            fetchPokemon();
        } else{
            console.log(`The pokemon with ID = ${currentPokemonID} has already been renderized in web. No request was made to API`)
        }
    }

    // searchInput.value = currentPokemonID;
    // searchInput.addEventListener('change', handleSearch)
    buttonSearch.addEventListener('click', handleSearch)
