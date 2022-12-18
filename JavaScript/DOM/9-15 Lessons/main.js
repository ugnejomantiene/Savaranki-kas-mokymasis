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

let btn = document.getElementById('myBtn'); // pasakome, kad mygtukas su ID #myBtn bus vadinamas kintamuoju btn.
btn.addEventListener('click', function(){ // parašome įvykį mygtukui. Pasakome, kad kažkas vykst atlikus click veiksmą
    let text = document.getElementById('myDiv'); // įvardijame, kurį elementą faile norėsime keisti
    if (text.style.display === 'none'){ // rašome sąlygą, kuri sako: jeigu mūsų keičiamojo elemento display yra none, tada
        text.style.display = 'block'; //pakeičiame ją į block.
    } else { // jeigu ne:
        text.style.display = 'none'; // tada paspaudus elemento display bus none.
    }
});

// Elementų atributų ir klasių modifikavimas 

let h2toChange = document.querySelector('h2'); // Pasakome, kad mūsų norimas pakeisti objektas yra h2, ir mes jį vadinsime h2toChange
h2toChange.innerText = 'Hello again'; // nurodome kur, kokio tipo ir kokį tekstą norime įvesti
h2toChange.style.backgroundColor = 'blue'; // papildomas nustatymas, pakeista spalva fonui.
