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
        // Organizing the functions & selectors
        let pokemonListFolder= document.querySelector('.pokemon-list')
        let createListItem= document.createElement('li');
        let button= document.createElement('button');

        //Create a button for each pokemon added
        button.innerText= pokemon.name;
        document.querySelector('.pokemon-list');
        pokemonListFolder.appendChild(createListItem);
        pokemonListFolder.lastElementChild.appendChild(button);
        let buttonSelect= pokemonListFolder.lastElementChild.querySelector('button');
        buttonSelect.classList.add(pokemon.typeClass);

        // Create an event listener to every button -> Pokémon information
        buttonSelect.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {

        console.log('Name: '+ pokemon.name+ ', '+ 'Height: '+ pokemon.height+ 'cm, '+ 'Types: '+ pokemon.types+ '.');
    }

    function loadList() {}

    function loadDetails() {}

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    }
})();

// Add pokemons to pokemonList

pokemonRepository.add({name: 'Bulbasaur', height: 70, types: [' grass', ' poison'], typeClass: 'pokemontype__grassPoison'});
pokemonRepository.add({name: 'Charmander', height: 60, types: ['fire'], typeClass: 'pokemontype__fire'});
pokemonRepository.add({name: 'Squirtle', height: 50, types: ['water'], typeClass: 'pokemontype__water'});

// Loop to create a button with each pokémon the 'pokemonList' contains

pokemonRepository.getAll().forEach(function(pokemon) {
    
    pokemonRepository.addListItem(pokemon);


})