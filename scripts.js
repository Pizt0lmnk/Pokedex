
let currentPokemon;

async function loadPokemon(){

let url = 'https://pokeapi.co/api/v2/pokemon/geodude';
let response = await fetch(url);

currentPokemon = await response.json();

console.log('Pokemon loaded:', currentPokemon);
renderPokemonInfo();
}

function renderPokemonInfo(){
    
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImage').src = currentPokemon["sprites"]["front_default"];
}