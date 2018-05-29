/*Using createElement and getElementById. Add a new Shirt to the ul. Set the innerText equal to 'Mens T-shirt'.*/

let li = document.getElementById('listItem1')
let button = document.createElement('button')
button.innertext = 'Mens T-Shirt'
listItem1.prepend(button)

const btnB =
        document.getElementById('btnB');
  btnB.onclick = () => {
    console.log("Bicker Jacket");
  };

const btnC =
        document.getElementById('btnC');
  btnC.onclick = () => {
    console.log("Men's Shirt");
  };
