let allPokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidorina", "Nidoqueen", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetchd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo"];

// ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo"];


let currentPokemon;             // globaly declader to be used later in all functions when filled


async function loadPokemon(){

let url = 'https://pokeapi.co/api/v2/pokemon/'+ allPokemon[2].toLowerCase();        // to lowercase to make all characters small
let response = await fetch(url);                                                    // wait for the fetch
currentPokemon = await response.json();                                             //declare api/json to be used later

console.log('Pokemon loaded:', currentPokemon);
renderPokemonInfo();                                                                // dieplay single pokemoncard
}

async function displayOverview(){
for (let i = 0; i < allPokemon.length; i++) {
    const thisPokemon = allPokemon[i];
    let url = 'https://pokeapi.co/api/v2/pokemon/'+ thisPokemon.toLowerCase();
  
    let response = await fetch(url);                                                    // wait for the fetch
    testWord = await response.json();

    console.log(testWord['name']);
    
}
}

function renderPokemonInfo(){                                                       // shows a variaty of info on selected pokemnon 
    
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImage').src = currentPokemon["sprites"]["other"]["dream_world"]["front_default"];   //its the .img so src =
    document.getElementById('skill-hp').innerHTML = currentPokemon["stats"][0]["base_stat"]+` hp`;
    document.getElementById('skill-attack').innerHTML = currentPokemon["stats"][1]["base_stat"]+` attack`;
    document.getElementById('skill-defence').innerHTML = currentPokemon["stats"][2]["base_stat"]+` defence`;
    document.getElementById('skill-speed').innerHTML = currentPokemon["stats"][5]["base_stat"]+` speed`;
    document.getElementById('type-1').innerHTML =currentPokemon["types"]["0"]["type"]["name"];
    document.getElementById('type-2').innerHTML =currentPokemon["types"]["1"]["type"]["name"];
}



async function loadPokemon(){

let url = 'https://pokeapi.co/api/v2/pokemon/'+ allPokemon[19].toLowerCase();        // to lowercase to make all characters small
let response = await fetch(url);                                                    // wait for the fetch
currentPokemon = await response.json();                                             //declare api/json to be used later

console.log('Pokemon loaded:', currentPokemon);
renderPokemonInfo();                                                                // dieplay single pokemoncard
}

async function displayOverview(){
for (let i = 0; i < allPokemon.length; i++) {
    const thisPokemon = allPokemon[i];
    let url = 'https://pokeapi.co/api/v2/pokemon/'+ thisPokemon.toLowerCase();
  
    let response = await fetch(url);                                                    // wait for the fetch
    currentPokemon = await response.json();

    console.log(currentPokemon['name']);
    
}
}

function renderPokemonInfo(){                                                       // shows a variaty of info on selected pokemnon 
    
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImage').src = currentPokemon["sprites"]["other"]["dream_world"]["front_default"];   //its the .img so src =
    document.getElementById('skill-hp').innerHTML = currentPokemon["stats"][0]["base_stat"]+` hp`;
    document.getElementById('skill-attack').innerHTML = currentPokemon["stats"][1]["base_stat"]+` attack`;
    document.getElementById('skill-defence').innerHTML = currentPokemon["stats"][2]["base_stat"]+` defence`;
    document.getElementById('skill-speed').innerHTML = currentPokemon["stats"][5]["base_stat"]+` speed`;
    document.getElementById('type-1').innerHTML =currentPokemon["types"]["0"]["type"]["name"];
    document.getElementById('type-2').innerHTML =currentPokemon["types"]["1"]["type"]["name"];
}