window.cipher = {
  encode: (offset, texto) => {
    const lengthText = texto.length; //2 AB
    let textencode=""
    for (let i = 0; i < lengthText; i++) {
      const positionAscii = texto.charCodeAt(i);//65--posiciòn  en codigo ascii
      //console.log(typeof offset, offset, positionAscii - 65 , positionAscii - 65 + offset )
      const increasedPosition = ((positionAscii - 65 + offset) % 26) + 65;//68-- cifrado (le suma el desplazamiento a la pocisiòn)
      //console.log(increasedPosition)
      const encodeLetter = String.fromCharCode(increasedPosition);
      //console.log(encodeLetter);
      textencode=textencode+encodeLetter
    }
      return textencode
  }
  ,
  decode: (offset, string) => {
    /* Acá va tu código */
  }
};
// console.log(newAlphabet)