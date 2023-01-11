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
});