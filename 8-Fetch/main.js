const pokeAPI_URL =  'https://pokeapi.co/api/v2/pokemon/'
let currentPokemonID = 1;
let currentPokemon;
const pokemonContainer = document.querySelector('.pokemon-container');

    const renderPokemon = () =>{
        const pokemonTemplate = 
            `<div class="pokemon">
            <h3>${currentPokemon.name}</h3>
            <span>ID: ${currentPokemon.id}</span>
            <img src="${currentPokemon.image}" alt="${currentPokemon.name}">
            </div>`
        pokemonContainer.innerHTML += pokemonTemplate;
    }

for(let i = 0; i < 300; ++i){
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
    currentPokemonID += 1;
}
