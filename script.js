const everyFrame = window.popmotion.everyFrame;
const circle = document.getElementById("circle");
let animation; // controls animation

function getPokemon() {
  let name = document.getElementById("pokemonName").value.toLowerCase().trim();
  //fetches the pokemon from the API, and if not found error message
  fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then(function(response) {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then(function(data) {
      document.getElementById("name").textContent = data.name;
      // shows the pokmemon image
      const img = document.getElementById("image");
      img.src = data.sprites.front_default;
      img.style.display = "block";
      // shows the pokemon type
      const type = document.getElementById("type");
      type.textContent = "Type: " + data.types[0].type.name;
      type.style.display = "block";
    })
    .catch(function() {
      alert("Pokemon not found");
    });
}
if (animation) animation.stop();

// animation to move circle
everyFrame().start(function(time) {
  let x = Math.sin(time / 500) * 100;
  let y = Math.cos(time / 500) * 50;
  circle.style.transform = `translate(${x}px, ${y}px)`;
});