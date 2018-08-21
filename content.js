console.log("stuffs");

window.onload = function() {
  console.log('Window has loaded!');
  document.body.innerHTML = "";
  newPage();
}

function newPage() {
  let bg = document.createElement('div');
  bg.setAttribute('id', 'bg');
  document.body.appendChild(bg);
  bg.style = "position: fixed; width: 100%; height: 100%; background-color: #FFF; top: 0;"

  let text = document.createElement('h1');
  text.innerText = "Stop Procrastinating!";
  text.setAttribute('id', 'text')
  bg.appendChild(text);
  text.style = "color: rgb(0, 0, 0); margin: 0px; font-size: 60pt; visibility: visible; display: block; position: fixed; top: 5%; left: 5%; padding: 10px; z-index: 100;"
}

// Ability to count how many times a social media app has been opened.
// Better styling and front end.
// Ability to turn on and off extension easily.
