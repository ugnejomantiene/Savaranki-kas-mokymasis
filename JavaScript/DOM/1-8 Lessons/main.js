// 1. DOM manipuliacija
// Elementų selektinimas pagal skirtingus kriterijus:                          
// .getElementById('') - įvedame ID elemento, kai norime priskirti;
// .getElementByClass('') - įvedame class elemento, kurį norime priskirti;
// .getElementByTagName('') - įvedame tag pavadinimą elemento, kurį norime priskirti;
//_____________Pageidautina jų nevartoti kuriant didelės apimties kodavimo rinkinius__________
// .querySelector('x')  -  parinks PIRMĄJĮ x elementą;
// .querySelectorAll('x')  - parinks VISUS x elementus;


// 2.
// document.createElement
// sukuriamas vardas / pasakome, kad pridėsime INPUT tipo elementą

let naujasElementas = document.createElement('input');
document.body.appendChild(naujasElementas);

let antrasNaujasElementas = document.createElement('select');
document.body.appendChild(antrasNaujasElementas);

// 3.
// Element.setAttribute()

let bandymas = document.createElement("div"); //priskiriame elementą
bandymas.setAttribute("class", "naujas");// pridedame jam klasę
document.body.appendChild(bandymas);// į body įdedame sukurtą elementą (stilizuotas juodas kvadratas HTML faile)

// 4.
// .innerHTML - leidžia pridėti tekstą kartu su elementu. Pvz.:
//  '<em>Hello</em>'  Bus įterptas pasviras tekstas Hello

// .textContent - leidžia įterpti TIK tekstą. Pvz.:
// '<em>Hello</em>'  Bus atvaizduotas visas kabutėse esantis turinys.

let islikimas = document.getElementById("islikimas");
islikimas.innerHTML = '<i>Labas</i>'; // atvaizduojamas pakreiptas tekstas
islikimas2.textContent = '<i>Labas</i>'; // atvaizduojamas tik kabučių turinys, be konvertavimo į elementą.

// 5. .appendChild()
// Tėvinio ir vaikinio elemento pridėjimo schema:
// Sukuriame tėvinį elementą -> sukuriame vaikinį elementą -> įdedame vaikinį elementą į tėvinį elementą.

        // Step-1
let sarasas = document.getElementById('sarasas'); // sukuriam ul
        // Step-2
let sarasoTurinys = document.createElement('li'); // sukuriam li su tekstu
sarasoTurinys.textContent = "Butas";
        // Step-3
sarasas.appendChild(sarasoTurinys); // įdedame li į ul

// 6. .appendChild naudojant ciklą
let maistoSarasas = document.getElementById('maistoSarasas'); // ul
let produktai = ["pienas", "obuolys", "kefyras", "makaronai"]; 

for (let element of produktai) {
    let produktaiSarase = document.createElement('li'); // pasakome, kad kiekvienas elementas bus li
    produktaiSarase.textContent = element; // pasakome, kad imsime tekstą kiekvieno elemento, esančio produktų masyve
    maistoSarasas.appendChild(produktaiSarase);// įdedame sukurtas reikšmes į pradinį (tuščią) HTML faile esantį ul.
}

// 7. Elementų stilizavimas naudojant JS
// Schema:
// priskiriame kintamąjam elementą -> naudodami .style parenkame savybę ir nustatome.

let stilizuojameEsanciusElementus = document.querySelector( 'input'); // pasakome, kad kai pasirinksime stilizuojameEsanciusElementus, keisime būtent pirmojo input tipo elementą
stilizuojameEsanciusElementus.style.color = 'red'; // input laukelyje vedamas tekstas bus atvaizduojamas raudonos spalvos

// 8. Elementų stilizavimas naudojant ciklą
// 

let stilizuojameTextElementus = document.querySelectorAll('.stilizuokimeVisus');
for (let i=0; i<stilizuojameTextElementus.length; i++){
        stilizuojameTextElementus[i].style.color = 'orange'};// visų 8 section input eilučių tekstas bus oranžinis


