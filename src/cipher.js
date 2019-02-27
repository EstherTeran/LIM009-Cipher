window.cipher = {
  encode: (offset, texto) => {
   // const lengthText = texto.length; //2 AB
    let textencode = "";
    for (let i = 0; i < texto.length; i++) {
      const positionAscii = texto.charCodeAt(i);//65--posiciòn  en codigo ascii
      const increasedPosition = ((positionAscii - 65 + offset) % 26) + 65;//68-- cifrado (le suma el desplazamiento a la posisiòn)
      const encodeLetter = String.fromCharCode(increasedPosition);
      textencode = textencode + encodeLetter
    }
    return textencode
  }
  ,
  decode: (offset, texto) => {
    //const lengthText = texto.length;
    let textencode = "";
    for (let i = 0; i < texto.length; i++) {
      const positionAscii = texto.charCodeAt(i);//65--posiciòn  en codigo ascii
      const increasedPosition = ((positionAscii - 90 - offset) % 26) + 90;//68-- cifrado (le suma el desplazamiento a la posisiòn)
      const encodeLetter = String.fromCharCode(increasedPosition);
      textencode = textencode + encodeLetter
    }
    return textencode
  }
};
