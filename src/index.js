const inputtext=document.getElementById("inputtext");
const paragraphResult=document.getElementById("result");
const inputoffset=document.getElementById("inputoffset")

const btnencode=document.getElementById("btnencode");
btnencode.addEventListener("click", () => {
    // window.cipher.encode(parseInt(inputoffset.value),inputtext.value.toUpperCase());
    result.innerHTML=window.cipher.encode(parseInt(inputoffset.value),inputtext.value.toUpperCase());
});
const btndecipher=document.getElementById("btndecipher");
btndecipher.addEventListener("click", () =>{
    // window.cipher.decode(inputoffset.value),inputtext.value.toUpperCase();
    result.innerHTML=window.cipher.decode(parseInt(inputoffset.value),inputtext.value.toUpperCase());
})
// btndecipher.addEventListener("click",() =>{
// inputMessage.value.toUpperCase;
// console.log("click descifrar",inputMessage.value.toUpperCase());
// result.innerHTML="descifrado "+ inputMessage.value.toUpperCase();
// })


