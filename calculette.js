//DOM
const touches = [...document.querySelectorAll('.bouton')]; // création de tableau avec les infos de la nodelist
const listeKeycode = touches.map(touche => touche.dataset.key);
const screen = document.querySelector('.ecran');

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calc(valeur);
});

const calc = (valeur) => {
    if (listeKeycode.includes(valeur)){
        switch(valeur){
            case '8' : // quand le keycode correspond à Backspace
                screen.textContent = "";
                break;
            case '13' : // quand le keycode correspond à Enter
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default :
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                screen.textContent += touche.innerHTML;
        }
    }

};

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue lors de votre calcul');
    screen.textContent = "";
});