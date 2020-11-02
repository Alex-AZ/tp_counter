const counter = document.getElementById("counter");

//S'il y a un "async" dans une fonction cela veut dire qu'il va y avoir un await après.
//Un "await" permet de ne pas passer à l'instruction suivante avant que celle-ci ne soit terminée.
const majCounter = async () => {
    //console.log(counter);
    const data = await fetch('https://api.countapi.xyz/hit/sltcava/visites');
    const count = await data.json();
    counter.innerHTML = count.value;
    counter.style.filter = 'blur(0)';

}

majCounter();

