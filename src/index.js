const inputMessage=document.getElementById("message");
const paragraphResult=document.getElementById("result");
const inputNumber=document.getElementById("optionsnumber")

const btncode=document.getElementById("btncode");
btncode.addEventListener("click",() =>{
inputMessage.value;
console.log ("click cifrar", inputMessage.value.toUpperCase());
result.innerHTML="cifrado "+ inputMessage.value.toUpperCase();
})
const btndecipher=document.getElementById("btndecipher");
btndecipher.addEventListener("click",() =>{
inputMessage.value.toUpperCase;
console.log("click descifrar",inputMessage.value.toUpperCase());
result.innerHTML="descifrado "+ inputMessage.value.toUpperCase();
})