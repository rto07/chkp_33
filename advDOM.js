/*Using createElement and getElementById. Add a new Shirt to the ul. Set the innerText equal to 'Mens T-shirt'.*/

const btnA =
        document.getElementById('btnA');
  btnA.addEventListener('click', () => {
    console.log("Men's T-Shirt");
  });

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