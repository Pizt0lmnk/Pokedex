



async function loadPokemon(){

let url = 'https://pokeapi.co/api/v2/pokemon/geodude';
let response = await fetch(url);
let responseAsJson = await response.json();

console.log('Pokemon loaded:', responseAsJson);
}