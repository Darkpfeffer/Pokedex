// reference: https://pokedex.org/
let pokemonRepository= (function() {
    let pokemonList= [];

    // Database for pokémons
    // let pokemon1= {
        // name: 'Bulbasaur',
        // height in cm
        // height: 70,
        // types: ['grass', 'poison']
    // };
    // let pokemon2= {
        // name: 'Charmander',
        // height: 60,
        // types: ['fire'],
    // };
    // let pokemon3= {
        // name: 'Squirtle',
        // height: 50,
        // types: ['water']
    // };

    // pokemonList= [pokemon1] //, pokemon2, pokemon3];
    // push pokemon data to 'pokemonList'
    function add(pokemon) {
        pokemonList.push(pokemon)
    }

    function getAll() {
       return pokemonList;
    }

    function getAllName() {
        return pokemonList.name
    }

    return {
        add: add,
        getAll: getAll,
        getAllName: getAllName
    }
})();

    // Loop to write a list of the pokemons' name and height.
/* pokemonList.forEach(function(pokemon) {
     if(pokemonRepository.pokemonList.height > 65) {
         document.write('<p>'+ 
         '<span class=pokemon-name>Name: </span>'+ 
         pokemonRepository.pokemonList.name+ '<span class=pokemon-height> Height: </span>'+ 
         pokemonRepository.pokemonList.height+ 
         ' - Wow, that\'s big'+ 
         '</p>')
     } else {
        document.write('<p>'+
        '<span class=pokemon-name>Name: </span>'+ 
        pokemon.name+ 
        '<span class=pokemon-height> Height: </span>'+
        pokemon.height+ 
        '</p>')
        } */

pokemonRepository.add({name: 'Bulbasaur', height: 70, types: ['grass', 'poison']});

let pokemonList= pokemonRepository.getAll();
console.log(pokemonList)
document.write('<p>'+ 'Some text '+ pokemonList+ '</p>')