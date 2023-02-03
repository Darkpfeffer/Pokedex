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
                    buttonSelect.classList.remove('grass');
                    buttonSelect.classList.remove('poison');
                    buttonSelect.classList.add('grassPoison');
                }else if (buttonSelect.classList.contains('bug') && buttonSelect.classList.contains('poison')) {
                    buttonSelect.classList.remove('bug');
                    buttonSelect.classList.remove('poison');
                    buttonSelect.classList.add('bugPoison')
                }else if (buttonSelect.classList.contains('ground') && buttonSelect.classList.contains('poison')) {
                    buttonSelect.classList.remove('ground');
                    buttonSelect.classList.remove('poison');
                    buttonSelect.classList.add('poisonGround')
                }else if (buttonSelect.classList.contains('normal') && buttonSelect.classList.contains('fairy')){
                    buttonSelect.classList.remove('normal');
                    buttonSelect.classList.remove('fairy');
                    buttonSelect.classList.add('normalFairy')
                }else if (buttonSelect.classList.contains('bug') && buttonSelect.classList.contains('grass')){
                    buttonSelect.classList.remove('bug');
                    buttonSelect.classList.remove('grass');
                    buttonSelect.classList.add('grassBug')
                }else if (buttonSelect.classList.contains('water') && buttonSelect.classList.contains('poison')){
                    buttonSelect.classList.remove('water');
                    buttonSelect.classList.remove('poison');
                    buttonSelect.classList.add('poisonWater')
                }else if (buttonSelect.classList.contains('rock') && buttonSelect.classList.contains('ground')){
                    buttonSelect.classList.remove('rock');
                    buttonSelect.classList.remove('ground');
                    buttonSelect.classList.add('groundRock')
                }else if (buttonSelect.classList.contains('water') && buttonSelect.classList.contains('psychic')){
                    buttonSelect.classList.remove('water');
                    buttonSelect.classList.remove('psychic');
                    buttonSelect.classList.add('psychicWater')
                }else if (buttonSelect.classList.contains('electric') && buttonSelect.classList.contains('steel')){
                    buttonSelect.classList.remove('electric');
                    buttonSelect.classList.remove('steel');
                    buttonSelect.classList.add('electricSteel')
                }else if (buttonSelect.classList.contains('water') && buttonSelect.classList.contains('ice')){
                    buttonSelect.classList.remove('water');
                    buttonSelect.classList.remove('ice');
                    buttonSelect.classList.add('iceWater')
                }else if (buttonSelect.classList.contains('ghost') && buttonSelect.classList.contains('poison')){
                    buttonSelect.classList.remove('ghost');
                    buttonSelect.classList.remove('poison');
                    buttonSelect.classList.add('poisonGhost')
                }else if (buttonSelect.classList.contains('grass') && buttonSelect.classList.contains('psychic')){
                    buttonSelect.classList.remove('grass');
                    buttonSelect.classList.remove('psychic');
                    buttonSelect.classList.add('psychicGrass')
                }else if (buttonSelect.classList.contains('psychic') && buttonSelect.classList.contains('fairy')){
                    buttonSelect.classList.remove('psychic');
                    buttonSelect.classList.remove('fairy');
                    buttonSelect.classList.add('psychicFairy')
                }else if (buttonSelect.classList.contains('ice') && buttonSelect.classList.contains('psychic')){
                    buttonSelect.classList.remove('ice');
                    buttonSelect.classList.remove('psychic');
                    buttonSelect.classList.add('psychicIce')
                }else if (buttonSelect.classList.contains('rock') && buttonSelect.classList.contains('water')){
                    buttonSelect.classList.remove('rock');
                    buttonSelect.classList.remove('water');
                    buttonSelect.classList.add('rockWater')
                }else if (buttonSelect.classList.contains('flying')) {
                    buttonSelect.classList.remove('flying');
                }else {
                    console.log('classification complete')
                }
            })
        })

        // Create an event listener to every button -> Pokémon information
        buttonSelect.addEventListener('click', function () {
            if (buttonSelect)
            buttonSelect.parentElement.classList.add('modal-container')
            showDetails(pokemon);
        });
    }



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

let modalIIFE= (function (){
    function showModal(pokemon) {
        // Create element shortcuts
        let divCreate= document.createElement('div');
        let divCreate2= document.createElement('div');
        let headingCreate= document.createElement('h1');
        let imageCreate= document.createElement('img');
        let paragraphCreate= document.createElement('p');
        let closeButtonElement= document.createElement('button')

        // modal function shortcuts
        let modalContainer= document.querySelector('.modal-container');
        let classRemove= modalContainer.classList.remove('modal-container');

        if (!modalContainer.lastElementChild.classList.contains('modal')) {
            modalContainer.appendChild(divCreate);
            modalContainer.lastElementChild.classList.add('modal');
            let modal= modalContainer.querySelector('.modal');
            modal.appendChild(divCreate2);
            modal.lastElementChild.classList.add('modal-child')
            let modalChild= modal.querySelector('.modal-child')
            modalChild.appendChild(closeButtonElement);
            modalChild.lastElementChild.classList.add('modal-close');
            modalChild.lastElementChild.innerText='Close';
            modalChild.appendChild(headingCreate);
            modalChild.lastElementChild.innerText= pokemon.name;
            modalChild.appendChild(paragraphCreate);
            modalChild.lastElementChild.innerText= 'Height: '+ pokemon.height;
            modalChild.appendChild(paragraphCreate);
            imageCreate.src= pokemon.imageUrl;
            modalChild.appendChild(imageCreate);
            modal.classList.add('is-visible');
            classRemove;
        } else {
            modal.classList.add('is-visible');
            classRemove;
        }
    }

    return {
        showModal: showModal
    }
})();

// Loop to create a button with each pokémon the 'pokemonList' contains

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
    
        pokemonRepository.addListItem(pokemon);
    });
});