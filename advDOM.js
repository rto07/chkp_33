/*Using the code from the prior checkpoint, add an Event Handler to the <li> element and console.log() the name of the shirt they selected.*/

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
