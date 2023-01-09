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
for (let i= 0; i< pokemonList.length; i++) {
    document.write('<p>'+ 'Name: '+ pokemonList[i].name+ ', Height: '+ pokemonList[i].height+ '</p>')
}