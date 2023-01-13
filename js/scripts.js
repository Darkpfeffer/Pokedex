// reference: https://pokedex.org/
let pokemonRepository= (function() {
    let pokemonList= [];

    // push pokemon data to 'pokemonList'
    function add(pokemon) {
        if(
            typeof pokemon=== 'object' &
            typeof pokemon.name=== 'string' &
            typeof pokemon.height=== 'number' &
            Array.isArray(pokemon.types)
        ) {
            pokemonList.push(pokemon)
        } else {
            console.log(`Not valid!`)
        }
    }
  
    function getAll() {
       return pokemonList;
    }
  
    return {
        add: add,
        getAll: getAll,
    }
})();

// Add pokemons to pokemonList

pokemonRepository.add({name: 'Bulbasaur', height: 70, types: [' grass', ' poison']});
pokemonRepository.add({name: 'Charmander', height: 60, types: ['fire']});
pokemonRepository.add({name: 'Squirtle', height: 50, types: ['water']});

// Loop to write a list of the pokemons' name and height.  

/* let listItem= document.createElement('li');
let button= document.createElement('button');
//button.innerText= pokemon.name
let pokemonList= document.querySelector('.pokemon-list') */

pokemonRepository.getAll().forEach(function(pokemon) {
    let pokemonList= document.querySelector('.pokemon-list')
    let createListItem= document.createElement('li');
    let button= document.createElement('button');
    button.innerText= pokemon.name;
    let listItem= pokemonList.querySelector('li');

    if(pokemon.height > 65) {
        document.querySelector('.pokemon-list');
        pokemonList.appendChild(createListItem);

    } else {
        document.querySelector('.pokemon-list')
    }
})