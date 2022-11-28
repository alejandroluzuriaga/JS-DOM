const pokeAPI_URL =  'https://pokeapi.co/api/v2/pokemon/';
const pokemons = ['pikachu' , 'ditto', 'charmander', 'charizard', 'pene'];
const searchURL = pokeAPI_URL;
const pokemonContainer = document.querySelector('.pokemon-container')
let pokemonData;

    for(let i = 0; i < pokemons.length; ++i){
        const pokemon = pokemons[i];
        fetch(`${searchURL}${pokemon}`) //Fetch --> Local Scope.
        .then((res) => res.json()) //Fetch response is solved in a json, then we get the data we need from it to construct an object Pokemon.
        .then((response) => {
            pokemonData = {
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

    const renderPokemon = () =>{
        const pokemonTemplate = 
            `<div class="pokemon">
            <span>ID: ${pokemonData.id}</span>
            <h3>${pokemonData.name}</h3>
            <img src="${pokemonData.image}" alt="${pokemonData.name}">
            </div>`
        pokemonContainer.innerHTML += pokemonTemplate;
    }
