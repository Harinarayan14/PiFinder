let pi;
let digits, searchBox;
let indexP;

function preload() {
  pi = loadStrings('pi-7million.txt');
}



function searchItUp() {
  let search = searchBox.value();
  console.log(search);

  let index = digits.indexOf(search, 2);


  if (index > 0) {
    indexP.html(index - 1 + " place in pi decimal digits");
  } else {
    indexP.html('not found in the first 14.1 million digits');
  }
}



function setup() {
  noCanvas();

  Header = createElement("h1");
  Header.html("Find your digits in Pi");
  Header.position(displayWidth/2.4,displayHeight/25);
  Header1 = createElement("h2");
  Header1.html("Pi finder (upto 14.1 million digits)");
  Header1.position(displayWidth/2.5,displayHeight/10);
  digits = pi[0];
  searchBox = createInput('');
  searchBox.input(searchItUp);
  searchBox.position(displayWidth/3,displayHeight/3)
  indexP = createP('searching');
  indexP.position(displayWidth/2.4,displayHeight/2)
}