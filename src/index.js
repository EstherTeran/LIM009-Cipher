const inputtext=document.getElementById("inputtext");
const paragraphResult=document.getElementById("result");
const inputoffset=document.getElementById("inputoffset")

const btnencode=document.getElementById("btnencode");
btnencode.addEventListener("click", () => {
 paragraphResult.innerHTML=window.cipher.encode(parseInt(inputoffset.value),inputtext.value.toUpperCase());
});
const btndecipher=document.getElementById("btndecipher");
btndecipher.addEventListener("click", () =>{
    paragraphResult.innerHTML=window.cipher.decode(parseInt(inputoffset.value),inputtext.value.toUpperCase());
})


