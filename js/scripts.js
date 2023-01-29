// reference: https://pokedex.org/
let pokemonRepository= (function() {
    let pokemonList= [];
    let apiUrl= 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // push pokemon data to 'pokemonList'
    function add(pokemon) {
        /* if(
            typeof pokemon=== 'object' &
            typeof pokemon.name=== 'string' &
            typeof pokemon.height=== 'number' &
            Array.isArray(pokemon.types)
        ) { */
            pokemonList.push(pokemon)
        /* } else {
            console.log(`Not valid!`)
        } */
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
        //console.log('Name: '+ pokemon.name+ ', '+ 'Height: '+ pokemon.height+ 'cm, '+ 'Types: '+ pokemon.types+ '.');
        loadDetails(pokemon).then(function() {
            console.log(pokemon);
        });
    }

    //Load pokemon data from external API

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon= {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e)
        })
    }

    function loadDetails(item) {
        let url= item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function(details) {
            //add the details to the item
            item.imageUrl= details.sprites.front_default;
            item.height= details.height;
            item.types= details.types;
        }).catch(function (e) {
            console.error(e);
        })
    }

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

/* pokemonRepository.add({name: 'Bulbasaur', height: 70, types: [' grass', ' poison'], typeClass: 'pokemontype__grassPoison'});
pokemonRepository.add({name: 'Charmander', height: 60, types: ['fire'], typeClass: 'pokemontype__fire'});
pokemonRepository.add({name: 'Squirtle', height: 50, types: ['water'], typeClass: 'pokemontype__water'}); */

// Loop to create a button with each pokémon the 'pokemonList' contains

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
    
        pokemonRepository.addListItem(pokemon);
    });
});