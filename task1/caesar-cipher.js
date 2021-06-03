function shiftChar(char, shift) {
  const isLetter = /[a-zA-Z]/.test(char);
  if (!isLetter) return char;
  
  const charCode = char.charCodeAt();
  const isLowercaseLetter = charCode > 90 ? true : false;
  const firstLetterInAlphabet = isLowercaseLetter ? 97 : 65;
  const lastLetterInAlphabet = isLowercaseLetter ? 123 : 91;
  const shiftIsPositive = shift >= 0 ? true : false;

  let shiftedCharCode = 0;
  
  if (shiftIsPositive) {
    shiftedCharCode = (charCode - firstLetterInAlphabet + shift) % 
                      26 + firstLetterInAlphabet;
  } else {
    shiftedCharCode = (charCode - firstLetterInAlphabet + shift) % 26;

    shiftedCharCode >= 0 ? shiftedCharCode += firstLetterInAlphabet :           
                           shiftedCharCode += lastLetterInAlphabet; 
  }

  return String.fromCharCode(shiftedCharCode); 
}

function encodeOrDecode(str, shift, action) {
  const strArr = str.split("");
  action === "decode" ? shift *= -1 : shift;
  const cipherText = strArr.map(letter => shiftChar(letter, shift)).join('');

  return cipherText;
}

export default encodeOrDecode;