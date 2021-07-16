const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(titulo, contagem){


let newElement = document.getElementById("js3"); //Captura o local onde quero inserir o elemento
let elemento = document.createElement("div"); //Criei o elemento Div
let paragrafo = document.createElement("p")
let resultado = document.createTextNode(contagem); //Criei um texto dentro da variável resultado
let cabecalho = document.createElement("h1");
let texto = document.createTextNode(titulo);


cabecalho.appendChild(texto);
elemento.appendChild(cabecalho);
paragrafo.appendChild(resultado); // Inseri o texto no elemento criado (da Div)
elemento.appendChild(paragrafo);
newElement.appendChild(elemento); //Inseri o elemento criado (a Div que criei) dentro do Html no local que possui a ID
js3.style.color = "red"
cabecalho.classList.add("classe")
cabecalho.style.color = "black"
cabecalho.style.background = "yellow"
cabecalho.style.width = 110 + "px"




// ========================================================================================

// let elementoNovo = document.createElement("div");
// elementoNovo.className = "secaoKata3";

// let elementoNovokatas3 = document.createElement("div");
// elementoNovokatas3.innerText = contagem;

// elementoNovo.appendChild(elementoNovokatas3);

// let destination = document.getElementById("js3");
// destination.appendChild(h1);
// destination.appendChild(elementoNovo)
} 

function kata1() {

    let titulo = "Kata 1"
    let contagem = [];
    for(let i=1; i <= 25; i++) {
    contagem.push(i)
} 
return showResults(titulo, contagem)

} kata1();


function kata2() {

    let titulo = "Kata 2"
    let contagem = [];

    for(let i = 25; i > 0; i--){

    contagem.push(i);

}

return showResults(titulo, contagem)

} kata2();


function kata3() {

    let titulo = "Kata 3"
    let contagem = [];

    for(let i = -1; i >= -25; i--){

    contagem.push(i);

}
return showResults(titulo, contagem)

} kata3();

function kata4() {

    let titulo = "Kata 4"
    let contagem = [];

    for(let i = -25; i < 0; i++){

    contagem.push(i);

}
return showResults(titulo, contagem)

} kata4();

function kata5() {

    let titulo = "Kata 5"
    let contagem = [];
    for(let i = 25; i >= -25; i--){
    if(i%2 !==0){
    contagem.push(i);
}
}
return showResults(titulo, contagem)

} kata5();


function kata6() {

    let titulo = "Kata 6"
    let contagem = [];
    for(let i = 1; i <=100; i++){
    if(i%3 ===0){
    contagem.push(i);
}
}
return showResults(titulo, contagem)

} kata6();


function kata7() {

    let titulo = "Kata 7"
    let contagem = [];
    for(let i = 1; i <=100; i++){
    if(i%7 ===0){
    contagem.push(i);
}
}
return showResults(titulo, contagem)

} kata7();


function kata8() {

    let titulo = "Kata 8"
    let contagem = [];
    for(let i = 100; i >0; i--){
    if(i%7 ===0 || i%3 ===0){
    contagem.push(i);
}
}
return showResults(titulo, contagem)

} kata8();


function kata9() {

    let titulo = "Kata 9"
    let contagem = [];
    for(let i = 1; i <=100; i++){
    if(i%5 ===0 && i%2 !==0) {

    contagem.push(i);
}

}
return showResults(titulo, contagem)


} kata9();


function kata10() {

    let titulo = "Kata 10"
    let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let contagem = sampleArray

    return showResults(titulo, contagem) 

} 
kata10();

function kata11() {

    let titulo = "Kata 11"
    let contagem = [];
    let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    
    for (let i = 0; i < sampleArray.length; i++){

    if(sampleArray[i]%2 === 0) {

    contagem.push(sampleArray[i]);
}
}
return showResults(titulo, contagem)

} kata11();



function kata12() {

    let titulo = "Kata 12"
    let contagem = [];
    let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    for (let i = 0; i < sampleArray.length; i++){

    if(sampleArray[i]%2 !== 0) {

    contagem.push(sampleArray[i]);
}
}
return showResults(titulo, contagem)

} kata12();


function kata13() {

    let titulo = "Kata 13"
    let contagem = [];
    let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    for (let i = 0; i < sampleArray.length; i++){
    if(sampleArray[i]%8 === 0) {
    contagem.push(sampleArray[i]);
}
}
return showResults(titulo, contagem)


} kata13();


function kata14() {

    let titulo = "Kata 14"
    let contagem = [];
    let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    for (let i = 0; i < sampleArray.length; i++){
    contagem.push(sampleArray[i]**2);
}
return showResults(titulo, contagem)

} kata14();


function kata15() {

    let titulo = "Kata 15"
    let contagem = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 
    let soma = 0;

    for (let i = 0; i < contagem.length; i++) { 

    soma += contagem[i];
} 
return showResults(titulo, soma)


} kata15();



function kata16() {

    let titulo = "Kata 16" 
    let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let soma = 0;

    for (let i = 0; i < sampleArray.length; i++) {
    soma += sampleArray[i];
}
return showResults(titulo, soma)

} kata16();


function kata17() {

let titulo = "Kata 17" 
let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
let menorNum = Math.min(...sampleArray) 

return showResults(titulo, menorNum)


} kata17();

function kata18() {
    let titulo = "Kata 18"
    let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let maiorNum = Math.max(...sampleArray)

    return showResults(titulo, maiorNum)

} kata18();

