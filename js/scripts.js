// reference: https://pokedex.org/
let pokemonRepository= (function() {
    let pokemonList= [];

    let obj= {name: 'pokemon', height: 70, types: ['fire']};

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
  

pokemonRepository.getAll().forEach(function(pokemon) {
    if(pokemon.height > 65) {
        document.write('<p>'+
        '<span class=pokemon-name>Name: </span>'+
        pokemon.name+
        '<span class=pokemon-height> Height: </span>'+
        pokemon.height+
        ' - Wow, that\'s big'+
        '<span class=pokemon-types> Types: </span>'+
        pokemon.types+ '</p>')
    } else {
        document.write('<p>'+
            '<span class=pokemon-name>Name: </span>'+ 
            pokemon.name+ 
            '<span class=pokemon-height> Height: </span>'+
            pokemon.height+
            '<span class=pokemon-types> Types: </span>'+
            pokemon.types+
            '</p>')
    }
})

/* old code before IIFE

// reference: https://pokedex.org/
let pokemonList= [];

// Database for pokémons
let pokemon1= {
    name: 'Bulbasaur',
    // height in cm
    height: 70,
    types: ['grass', 'poison']
};
let pokemon2= {
    name: 'Charmander',
    height: 60,
    types: ['fire'],
};
let pokemon3= {
    name: 'Squirtle',
    height: 50,
    types: ['water']
};

pokemonList= [pokemon1, pokemon2, pokemon3];

// Loop to write a list of the pokemons' name and height.
pokemonList.forEach(function(pokemon) {
    if(pokemon.height > 65) {
        document.write('<p>'+ 
        '<span class=pokemon-name>Name: </span>'+ 
        pokemon.name+ '<span class=pokemon-height> Height: </span>'+ 
        pokemon.height+ 
        ' - Wow, that\'s big'+ 
        '</p>')
    } else {
        document.write('<p>'+
         '<span class=pokemon-name>Name: </span>'+ 
         pokemon.name+ 
         '<span class=pokemon-height> Height: </span>'+
          pokemon.height+ 
          '</p>')
    }
}); */