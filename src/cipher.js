window.cipher = {
  encode: (offset,texto) => {
  /*const longitud=texto.length;
for(let i = 1;i<longitud;i++){
  console.log(texto.charCodeAt(i))}
  console.log(texto.charCodeAt());*/
  const palabra = "A"
var offset=3;
var asciinumero= frases.charCodeAt();
var nuevoascii = (asciinumero-65+8)%26+65;
var nuevaletra= String.fromCharCode(nuevoascii);
console.log(nuevaletra)

},
 decode: (offset, string) => {
    /* Acá va tu código */
  }
};
