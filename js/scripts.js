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
    
    function addListItem(pokemon) {
        let pokemonListFolder= document.querySelector('.pokemon-list')
        let createListItem= document.createElement('li');
        let button= document.createElement('button');
        button.innerText= pokemon.name;
        document.querySelector('.pokemon-list');
        pokemonListFolder.appendChild(createListItem);
        pokemonListFolder.lastElementChild.appendChild(button);
        let buttonSelect= pokemonListFolder.lastElementChild.querySelector('button');
        buttonSelect.classList.add(pokemon.typeClass);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    }
})();

// Add pokemons to pokemonList

pokemonRepository.add({name: 'Bulbasaur', height: 70, types: [' grass', ' poison'], typeClass: 'pokemontype__grassPoison'});
pokemonRepository.add({name: 'Charmander', height: 60, types: ['fire'], typeClass: 'pokemontype__fire'});
pokemonRepository.add({name: 'Squirtle', height: 50, types: ['water'], typeClass: 'pokemontype__water'});

// Loop to write a list of the pokemons' name and height.  

/* let listItem= document.createElement('li');
let button= document.createElement('button');
//button.innerText= pokemon.name
let pokemonList= document.querySelector('.pokemon-list') */

pokemonRepository.getAll().forEach(function(pokemon) {
    
    pokemonRepository.addListItem(pokemon);
})