let allPokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "nidoran-f", "Nidorina", "Nidoqueen", "nidoran-m", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetchd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "mr-mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];

document.addEventListener('alpine:init', () => {
    Alpine.store('cards', {
        centered: false, centeredPokemon: '',
    })

    fetchPokemon().then(() => console.log('Pokemon loaded.'));
})

async function fetchPokemon() {
    const urls = [];
    for (let i = 0; i < allPokemon.length; i++) {                       // load all pokemon from array
        urls.push('https://pokeapi.co/api/v2/pokemon/' + allPokemon[i].toLowerCase()); //lowercase so it fits the URL
    }
    const requests = urls.map((url) => fetch(url));
    const responses = await Promise.all(requests);
    const json = responses.map((response) => response.json());
    const data = await Promise.all(json);
    data.forEach((pokemon, index) => {
        let pokemonEntry = '';                              // predefined and empty so it can be filled later (3 parts)

        let Types = pokemon["types"].length;         // checking if one or two types are defined
        pokemonEntry += `
            <div :id="$id('pokemon')" x-bind:class="$store.cards.centered && $store.cards.centeredPokemon === $el.id ? 'card-centered' : ''" x-on:click="setPokemon($el)" class="card-wrapper bg-${pokemon["types"]["0"]["type"]["name"]}">
                <img src="${pokemon["sprites"]["other"]["dream_world"]["front_default"]}" class="card-image " alt="${pokemon['name']}">
                <div class="card-description">
                    <h2 class="card-title">${pokemon['name'].substring(0, 1).toUpperCase() + pokemon['name'].substring(1)}<small class="card-number">#${index + 1}</small></h2>
                    
                    <p class="card-text"> ${pokemon["types"]["0"]["type"]["name"]}</p>`
        if (Types > 1) {                                    // to display only if both types are set
            pokemonEntry += `<p class="card-text">${pokemon["types"]["1"]["type"]["name"]}</p>`
        }
        pokemonEntry += `
                </div>
            </div>`
        document.getElementById('pokemon-list').innerHTML += pokemonEntry; // let the different elements be in place befor you display it
    });
}

async function setPokemon(element) {
    if (Alpine.store('cards').centered === false) {
        Alpine.store('cards').centered = true;
        Alpine.store('cards').centeredPokemon = element.id;
    } else {
        Alpine.store('cards').centered = false;
        Alpine.store('cards').centeredPokemon = '';
    }
}