document.querySelector('#search').addEventListener('click', getPokemon);


function getPokemon(e) {
    const name = document.querySelector('#pokemonName').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((reponse) => reponse.json()).then((data) => {
        document.querySelector(".pokemonBox").innerHTML = `<div>
        <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
    </div>
    <div class="pokemonInfo">
        <h1>${data.name}</h1>
        <b>Wight:${data.weight}</b>
    </div>
        `
    })
    .catch((err) => {
        console.log('Pokemon not found', err)
    });
    e.preventDefault();
}