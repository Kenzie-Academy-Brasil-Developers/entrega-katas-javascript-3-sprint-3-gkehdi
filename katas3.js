const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(contagem){


let newElement = document.getElementById("js3"); //Captura o local onde quero inserir o elemento
let elemento = document.createElement("div"); //Criei o elemento Div
let resultado = document.createTextNode(contagem); //Criei um texto dentro da variável resultado
let espaco = document.createElement("br") //Criei uma <br>

elemento.appendChild(resultado); // Inseri o texto no elemento criado (da Div)
newElement.appendChild(elemento); //Inseri o elemento criado (a Div que criei) dentro do Html no local que possui a ID
newElement.appendChild(espaco); //Inseri <br> dentro dentro do Html no local que possui a ID

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

let contagem = [];
for(let i=1; i <= 25; i++) {
contagem.push(i)
} 
showResults(contagem)
return contagem
} kata1();


function kata2() {

let contagem = [];

for(let i = 25; i > 0; i--){

contagem.push(i);

}

showResults(contagem)
return contagem
} kata2();


function kata3() {
let contagem = [];

for(let i = -1; i >= -25; i--){

contagem.push(i);

}
showResults(contagem)
return contagem
} kata3();

function kata4() {

let contagem = [];

for(let i = -25; i < 0; i++){

contagem.push(i);

}
showResults(contagem)
return contagem
} kata4();

function kata5() {

let contagem = [];
for(let i = 25; i >= -25; i--){
if(i%2 !==0){
contagem.push(i);
}
}
showResults(contagem)
return contagem
} kata5();
// // implemente o código do kata 5 aqui

function kata6() {

let contagem = [];
for(let i = 1; i <=100; i++){
if(i%3 ===0){
contagem.push(i);
}
}
showResults(contagem)
return contagem
} kata6();
// // implemente o código do kata 6 aqui

function kata7() {

let contagem = [];
for(let i = 1; i <=100; i++){
if(i%7 ===0){
contagem.push(i);
}
}
showResults(contagem)
return contagem
} kata7();
// implemente o código do kata 7 aqui

function kata8() {

let contagem = [];
for(let i = 100; i >0; i--){
if(i%7 ===0 || i%3 ===0){
contagem.push(i);
}
}
showResults(contagem)
return contagem
} kata8();
// // implemente o código do kata 8 aqui

function kata9() {

let contagem = [];

for(let i = 1; i <=100; i++){

if(i%5 ===0 && i%2 !==0) {

contagem.push(i);
}

}
showResults(contagem)
return contagem

} kata9();
// // implemente o código do kata 9 aqui

function kata10() {

let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

showResults(sampleArray) 
return sampleArray
} 
kata10();
// implemente o código do kata 10 aqui

function kata11() {

let contagem = [];
let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
for (let i = 0; i < sampleArray.length; i++){

if(sampleArray[i]%2 === 0) {

contagem.push(sampleArray[i]);
}
}
showResults(contagem)
return contagem
} kata11();
// // implemente o código do kata 11 aqui

function kata12() {

let contagem = [];
let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
for (let i = 0; i < sampleArray.length; i++){

if(sampleArray[i]%2 !== 0) {

contagem.push(sampleArray[i]);
}
}
showResults(contagem)

return contagem

} kata12();
// // implemente o código do kata 12 aqui

function kata13() {

let contagem = [];
let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
for (let i = 0; i < sampleArray.length; i++){
if(sampleArray[i]%8 === 0) {
contagem.push(sampleArray[i]);
}
}
showResults(contagem)
return contagem

} kata13();
// // implemente o código do kata 13 aqui

function kata14() {

let contagem = [];
let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
for (let i = 0; i < sampleArray.length; i++){
contagem.push(sampleArray[i]**2);
}
showResults(contagem)
return contagem

} kata14();
// // implemente o código do kata 14 aqui

function kata15() {

let contagem = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 
let soma = 0;

for (let i = 0; i < contagem.length; i++) { 

soma += contagem[i];
} 
showResults(soma)
return soma

} kata15();

// // implemente o código do kata 15 aqui

function kata16() {

let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
let soma = 0;

for (let i = 0; i < sampleArray.length; i++) {
soma += sampleArray[i];
}
showResults(soma)
return soma
} kata16();
// // implemente o código do kata 16 aqui

function kata17() {

let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
let menorNum = Math.min(...sampleArray) 

showResults(menorNum)
return menorNum

} kata17();

function kata18() {

let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
let maiorNum = Math.max(...sampleArray)

showResults(maiorNum)
return maiorNum
} kata18();

