// 9. Event Listener
// Tai atributas, kuris leidžia suprogramuoti, kad kažkas nutiktų vartotojui atlikus tam tikrus veiksmus, pvz.: paspaudus pelytę, paspaudus tam tikrą klaviatūros mygtuką ir pnš.

// element.addEventListener('action', function);

//Pavyzdžiai:

//---------

//  1. BŪDAS Paprasčiausias, tačiau netinkamiausias būdas aprašyti eventą HTML faile (Aprašymas Click1 HTML faile)

// 2. BŪDAS universalesnis, galima naudoti pagal schemą:
// kintamąjam priskiriame elementą -> apsirašome funkcija, kuri nusako, kas ir nuo kokio veiksmo bus atliekama -> sukurta informacija sujungiama į bendrą formulę element.addEventListener('action', function);

let antrasClick = document.querySelector('#antras'); // pasakome, kad #antras priskiriamas antrasClick kintamąjam. Kai kodo rašymo eigoje sakysime "antrasClick", iš tikro keisime elementą #antras

function antrasClickFunkcija(){
    alert('Click2'); 
} // pasakome, kad mūsų įvykis bus alert atsiradimas su tekstu 'Click2'

antrasClick.addEventListener('click', antrasClickFunkcija); // sujungiame viską į pagrindinę formulę.

// 3. BŪDAS
// funkcijos dalyje galima įdėti kelis dalykus, kurie atsitiks vartotojui atlikus tam tikrą veiksmą.

let treciasPelytesUzejimas = document.querySelector('#trecias');

function treciasPelytesUzejimasFunkcija(){
    treciasPelytesUzejimas.style.backgroundColor = ('blue');
    console.log('Tau pavyko!!!');
}
treciasPelytesUzejimas.addEventListener('mouseover', treciasPelytesUzejimasFunkcija);


//_____________________________________________________________
// 10. Elementų paslėpimo/parodymo mygtukas

