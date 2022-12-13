// 1.
// document.createElement
// sukuriamas vardas / pasakome, kad pridėsime INPUT tipo elementą

let naujasElementas = document.createElement('input');
document.body.appendChild(naujasElementas);

let antrasNaujasElementas = document.createElement('select');
document.body.appendChild(antrasNaujasElementas);

// 2.
// Element.setAttribute()

let bandymas = document.createElement("div"); //priskiriame elementą
bandymas.setAttribute("class", "naujas");// pridedame jam klasę
document.body.appendChild(bandymas);// į body įdedame sukurtą elementą (stilizuotas juodas kvadratas HTML faile)

// 3.
// .innerHTML - leidžia pridėti tekstą kartu su elementu. Pvz.:
//  '<em>Hello</em>'  Bus įterptas pasviras tekstas Hello

// .textContent - leidžia įterpti TIK tekstą. Pvz.:
// '<em>Hello</em>'  Bus atvaizduotas visas kabutėse esantis turinys.

