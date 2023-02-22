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
        createListItem.classList.add('list-group-item')
        pokemonListFolder.lastElementChild.appendChild(button);
        let buttonSelect= pokemonListFolder.lastElementChild.querySelector('button');
        buttonSelect.classList.add('btn-block');
        buttonSelect.classList.add('btn-primary');
        buttonSelect.setAttribute('data-toggle', 'modal')
        buttonSelect.setAttribute('data-target', '#exampleModal')
        buttonSelect.parentElement.classList.add('col-xl-3');
        buttonSelect.parentElement.classList.add('col-lg-4');
        buttonSelect.parentElement.classList.add('col-md-6');

        // Add classes for CSS purposes
        const dualTypeMap = {
            'bug_grass': 'grassBug',
            'bug_poison': 'bugPoison',
            'electric_steel': 'electricSteel',
            'fairy_normal': 'normalFairy',
            'fairy_psychic': 'psychicFairy',
            'fighting_water': 'waterFighting',
            'ghost_poison': 'poisonGhost',
            'grass_poison': 'grassPoison',
            'grass_psychic': 'psychicGrass',
            'ground_poison': 'poisonGround',
            'ground_rock': 'groundRock',
            'ice_psychic': 'psychicIce',
            'ice_water': 'iceWater',
            'poison_water': 'poisonWater',
            'psychic_water': 'psychicWater',
            'rock_water': 'rockWater',
            // 'flying class will be deleted
            'fire_flying': 'fire',
            'bug_flying': 'bug',
            'flying_normal': 'normal',
            'flying_poison': 'poison',
            'flying_water': 'water',
            'flying_rock': 'rock',
            'flying_ice': 'ice',
            'electric_flying': 'electric',
            'dragon_flying': 'dragon'
        };
        loadTypes(pokemon).then(function() {
            let pokemonTypes= pokemon.types;
            let pokemonTypes2 = pokemon.types.map(type => type.type.name);
            pokemonTypes.forEach(function(item) {
                let itemType= item.type;
                let itemName= itemType.name;

                if (pokemonTypes.length === 1) {
                    buttonSelect.classList.add(itemName);
                } else if (pokemonTypes.length === 2) {
                    let dualType = pokemonTypes2.sort().join('_');
                    newClassName = dualTypeMap[dualType];
                    buttonSelect.classList.add(newClassName);
                }
            })
        })

        // Create an event listener to every button -> Pokémon information
        buttonSelect.addEventListener('click', function () {
            buttonSelect.parentElement.classList.add('modal-container')
            showDetails(pokemon);
        });
    }


    //shows details of the selected pokemon as a modal
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function(){
            modalIIFE.showModal(pokemon);
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

    // load pokemon data details on selected pokemon
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
    // load pokemon types for CSS purposes
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

    function searchPokemon() {
        let input= document.querySelector('.search-input');
        let pokemonList2= document.querySelector('.pokemon-list')
        let pokemonElements= pokemonList2.getElementsByTagName('li')
        for (let i=0; i< pokemonElements.length; i++) {
            pokemonElements[i].classList.remove('hide')
        }

        for (let i=0; i< pokemonElements.length; i++) {
            // if the input field is empty, don't do anything except the default class remove
            if(input.value=== ''){
            // if the input field contains a part of the pokemon name, every other button should get the hide class
            } else if (pokemonElements[i].innerText.indexOf(input.value)) {
                pokemonElements[i].classList.add('hide')
            }
        }        
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails,
        loadTypes: loadTypes,
        searchPokemon: searchPokemon
    }

})();
// modal repository IIFE
let modalIIFE= (function (){
    function showModal(pokemon) {
        // Create element shortcuts
        let divCreate= document.createElement('div');
        let divCreate2= document.createElement('div');
        let divCreate3= document.createElement('div');
        let headingCreate= document.createElement('h1');
        let imageCreate= document.createElement('img');
        let paragraphCreate= document.createElement('p');
        let closeButtonElement= document.createElement('button')

        // modal function shortcuts
        let modalContainer= document.querySelector('.modal-container');

        // statements to create visible information if it haven't be done before
        if (!modalContainer.lastElementChild.classList.contains('modal')) {
            // create a div for modal
            modalContainer.appendChild(divCreate);
            modalContainer.lastElementChild.classList.add('modal');
            let modal= modalContainer.querySelector('.modal');
            modal.setAttribute('tabindex', '-1');
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('id', 'exampleModal');

            // create second div for Bootstrap modal
            modal.appendChild(divCreate2);
            modal.lastElementChild.classList.add('modal-dialog');
            let modalSecond= modal.querySelector('.modal-dialog');
            modalSecond.setAttribute('role', 'document');

            // create a third div for CSS purposes
            modalSecond.appendChild(divCreate3);
            modalSecond.lastElementChild.classList.add('modal-content');
            let modalChild= modalSecond.querySelector('.modal-content');

            /* create a close button, a heading with the pokemon name, paragraph for pokemon height,
            and an image of the pokemon. */
            modalChild.appendChild(closeButtonElement);
            modalChild.lastElementChild.setAttribute('type', 'button')
            modalChild.lastElementChild.classList.add('close');
            modalChild.lastElementChild.setAttribute('data-dismiss', 'modal');
            modalChild.lastElementChild.setAttribute('aria-label', 'Close');
            modalChild.lastElementChild.innerHTML='<span aria-hidden="true">&times;</span>';
            modalChild.lastElementChild.innerText='Close';
            modalChild.lastElementChild.addEventListener('click', hideModal);
            modalChild.appendChild(headingCreate);
            headingCreate.classList.add('modal-title');
            modalChild.lastElementChild.innerText= 'Name: '+ pokemon.name;
            modalChild.appendChild(paragraphCreate);
            paragraphCreate.classList.add('modal-content')
            modalChild.lastElementChild.innerText= 'Height: '+ pokemon.height;
            imageCreate.src= pokemon.imageUrl;
            modalChild.appendChild(imageCreate);
            imageCreate.classList.add('modal-content');
            imageCreate.setAttribute('id', 'my-image')

            // add a class to the div to be the details visible for the user
            modal.classList.add('is-visible');
            let activeModal= document.querySelector('.is-visible');

            // add an event listener to close the modal when the user clicks outside of the modal
            activeModal.addEventListener('click', (e) => {
                let target= e.target;
                if(target=== activeModal) {
                    hideModal();
                } 
            })

            // click on the button again to open modal window immediately
            let buttonActivate= modalContainer.querySelector('.btn-block')
            buttonActivate.click();

        } else {
            let modal= modalContainer.querySelector('.modal');

            // set ID to open modal on 'buttonActivate.click()'
            modal.setAttribute('id', 'exampleModal');
            let buttonActivate= modalContainer.querySelector('.btn-block')
            if (modal.classList.contains('is-visible')) {
                // leave this empty! (prevent 'buttonActivate.click()' activation endlessly)
            } else {
                // click on the button again to open modal window immediately
            buttonActivate.click();
            modal.classList.add('is-visible');
            }
        }
    }

    function hideModal() {
        let modalContainer= document.querySelector('.modal-container');

        // remove class 'is-visible' to hide modal window
        let activeModal= document.querySelector('.is-visible');
        activeModal.classList.remove('is-visible');

        // remove 'id="exampleModal" and 'class="modal-container" to prevent to stuck at the first opened modal window
        let exampleModal= document.getElementById('exampleModal');
        exampleModal.removeAttribute('id');
        modalContainer.classList.remove('modal-container');
    }

    return {
        showModal: showModal,
        hideModal: hideModal
    }
})();

// Loop to create a button with each pokémon the 'pokemonList' contains

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
    
        pokemonRepository.addListItem(pokemon);

    });
});

// add an event listener for hide the modal if 'Escape' button have been pressed
window.addEventListener('keydown', (e) => {
    if (e.key=== 'Escape'&& document.querySelector('.is-visible')) {
        modalIIFE.hideModal();
    }
})

//add an event listener to the search button to prevent default function and use 'searchPokemon()' function
let searchButton= document.querySelector('.submit-button')

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    pokemonRepository.searchPokemon();
})

// add event listener to search bar to prevent default function after pressing 'Enter' and use 'searchPokemon()' function 
searchButton.addEventListener('keydown', (e) => {
    let input= document.querySelector('.search-input');
    if (input.key=== 'Enter') {
        e.preventDefault();
        pokemonRepository.searchPokemon();
    }
})