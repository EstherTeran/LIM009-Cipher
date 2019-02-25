window.cipher = {
  encode: (offset, texto) => {
    const lengthText = texto.length; //2 AB
    let textencode = ""
    for (let i = 0; i < lengthText; i++) {
      const positionAscii = texto.charCodeAt(i);//65--posiciòn  en codigo ascii
      const increasedPosition = ((positionAscii - 65 + offset) % 26) + 65;//68-- cifrado (le suma el desplazamiento a la posisiòn)
      const encodeLetter = String.fromCharCode(increasedPosition);
      textencode = textencode + encodeLetter
    }
    return textencode
  }
  ,
  decode: (offset, texto) => {
   const texto="A";
   const offset =2;
   

   
    /*const lengthText = texto ; //2 AB
    let textdecode = ""
    for (let i = 0; i < lengthText; i++) {
      const positionAscii = texto.charCodeAt(i);//65--posiciòn  en codigo ascii
      const increasedPosition = ((positionAscii - 65 + offset) % 26) + 65;//68-- cifrado (le suma el desplazamiento a la posisiòn)
      const decodeLetter = String.fromCharCode(increasedPosition);
      textdecode = textdecode + decodeLetter
    }
    return textdecode*/

  }
};
