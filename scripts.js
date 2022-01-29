
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
    document.getElementById('pokemonImage').src = currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
    document.getElementById('skill-hp').innerHTML = currentPokemon["stats"][0]["base_stat"]+` hp`;
    document.getElementById('skill-attack').innerHTML = currentPokemon["stats"][1]["base_stat"]+` attack`;
    document.getElementById('skill-defence').innerHTML = currentPokemon["stats"][2]["base_stat"]+` defence`;
    document.getElementById('skill-speed').innerHTML = currentPokemon["stats"][5]["base_stat"]+` speed`;
    document.getElementById('type-1').innerHTML =currentPokemon["types"]["0"]["type"]["name"];
    document.getElementById('type-2').innerHTML =currentPokemon["types"]["1"]["type"]["name"];
}
