const pokeAPI_URL =  'https://pokeapi.co/api/v2/pokemon/'
let currentPokemonID = 1;
let pokemonIDs = [];
let currentPokemon;
const searchInput = document.querySelector('#pokemon-input')
const searchForm = document.querySelector('#pokemon-data');
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
        fetch(`${pokeAPI_URL}${currentPokemonID}`)
        .then((res) => res.json()) 
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
        event.preventDefault();
        if (!pokemonIDs.includes(currentPokemonID)){
            pokemonIDs.push(currentPokemonID);
            fetchPokemon();
        } else{
            console.log(`The pokemon with ID = ${currentPokemonID} has already been renderized in web. No request was made to API`)
        }
    }

    const getInput = () =>{
        currentPokemonID = searchInput.valueAsNumber;
    }

    searchInput.addEventListener('input', getInput);
    searchForm.addEventListener('submit', handleSearch);
