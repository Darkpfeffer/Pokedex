// reference: https://pokedex.org/
let pokemonRepository= (function() {
    let pokemonList= [];
    let apiUrl= 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // push pokemon data to 'pokemonList'
    function add(pokemon) {
        pokemonList.push(pokemon)
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
        // buttonSelect.classList.add();

        loadTypes(pokemon).then(function() {
            let pokemonTypes= pokemon.types
            pokemonTypes.forEach(function(item) {
                let itemType= item.type;
                let itemName= itemType.name;
                buttonSelect.classList.add(itemName);
                if (buttonSelect.classList.contains('grass') && buttonSelect.classList.contains('poison')) {
                    // console.log('Type '+ item.slot+ '= '+ itemName)
                    buttonSelect.classList.remove('grass')
                    buttonSelect.classList.remove('poison')
                    buttonSelect.classList.add('grassPoison') 
                }
            })
        })

        // Create an event listener to every button -> Pokémon information
        buttonSelect.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
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

    function loadDetails(pokemon) {
        let url= pokemon.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function(details) {
            //add the details to the item
            pokemon.imageUrl= details.sprites.front_default;
            pokemon.height= details.height;
            pokemon.types= details.types;
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadTypes(pokemon) {
        let url= pokemon.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function(details) {
            //add the details to the item
            pokemon.types= details.types;
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
        loadDetails: loadDetails,
        loadTypes: loadTypes
    }
})();

// Loop to create a button with each pokémon the 'pokemonList' contains

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
    
        pokemonRepository.addListItem(pokemon);
    });
});

console.log(document.querySelector('ul'))