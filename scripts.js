let allPokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "nidoran-f", "Nidorina", "Nidoqueen", "nidoran-m", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetchd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "mr-mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo"];


let currentPokemon;             // globaly declader to be used later in all functions when filled


async function displayOverview() {
    for (let i = 0; i < allPokemon.length; i++) {                       // load all pokemon from array
        const thisPokemon = allPokemon[i];
        let url = 'https://pokeapi.co/api/v2/pokemon/' + thisPokemon.toLowerCase(); //lowercase so it fits the URL

        let response = await fetch(url);                    //waiting so the function doesnt continue without this input
        currentPokemon = await response.json();             // to json so we have a file type we can work with

        let Types = currentPokemon["types"].length;
        if (Types > 1) {                                    // to display only if bot types are set
            document.getElementById('overview').innerHTML += `
            <div onclick="loadPokemon('${currentPokemon['name']}')" style="height:250px; width:250px; position:relative;" class=" ">
            <img style="height:100px;" src="${currentPokemon["sprites"]["other"]["dream_world"]["front_default"]}" class="mt-3 card-img" alt="...">
            <div id ="quick-fix"class="card-img-overlay">
              <h5 class="card-title">${currentPokemon['name'].toUpperCase()}</h5>
              <p class="card-text"> ${currentPokemon["types"]["0"]["type"]["name"]}</p>
              <p class="card-text">${currentPokemon["types"]["1"]["type"]["name"]}</p>
            </div>
            </div>
         `;
        }

        else {
            document.getElementById('overview').innerHTML += `
            <div onclick="loadPokemon('${currentPokemon['name']}')" style="height:250px; width:250px; position:relative;" class=" ">
            <img style="height:100px;" src="${currentPokemon["sprites"]["other"]["dream_world"]["front_default"]}" class="mt-4 ms-2 card-img" alt="...">
            <div id ="quick-fix"class="card-img-overlay">
              <h5 class="card-title">${currentPokemon['name'].toUpperCase()}</h5>
                <p class="card-text"> ${currentPokemon["types"]["0"]["type"]["name"]}</p>
       
        </div>
        </div>
         `;

        }
    }
}

/*
    function SeconType() {
        let Types = currentPokemon["types"].length;
        if (Types > 1) {
            document.getElementById('quick-fix').innerHTML += `  <p class="card-text">${currentPokemon["types"]["1"]["type"]["name"]}</p>`;

        }
    }
*/


function renderPokemonInfo() {                                                       // shows a variaty of info on selected pokemnon 

    document.getElementById('pokemonName').innerHTML = currentPokemon['name'].toUpperCase();
    document.getElementById('pokemonImage').src = currentPokemon["sprites"]["other"]["dream_world"]["front_default"];   //its the .img so src =
    document.getElementById('skill-hp').innerHTML = currentPokemon["stats"][0]["base_stat"] + ` hp`;
    document.getElementById('skill-attack').innerHTML = currentPokemon["stats"][1]["base_stat"] + ` attack`;
    document.getElementById('skill-defence').innerHTML = currentPokemon["stats"][2]["base_stat"] + ` defence`;
    document.getElementById('skill-speed').innerHTML = currentPokemon["stats"][5]["base_stat"] + ` speed`;
    document.getElementById('type-1').innerHTML = currentPokemon["types"]["0"]["type"]["name"];
    document.getElementById('type-2').innerHTML = currentPokemon["types"]["1"]["type"]["name"];
}



async function loadPokemon(name) {
    showCard();
    console.log('The picked Pokemon is', name);
    let url = 'https://pokeapi.co/api/v2/pokemon/' + name;        // to lowercase to make all characters small
    let response = await fetch(url);                                                    // wait for the fetch
    currentPokemon = await response.json();                                             //declare api/json to be used later

    renderPokemonInfo();                                                         // display single pokemoncard
}


function showCard() {
    document.getElementById('pokedex').classList.remove('d-none');
    document.getElementById('overview').classList.add('d-none');
}


function hideCard() {
    document.getElementById('pokedex').classList.add('d-none');
    document.getElementById('overview').classList.remove('d-none');
}

