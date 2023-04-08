function rot13(str) {
  let caesar_str = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) {
      caesar_str += String.fromCharCode(((charCode - 'A'.charCodeAt(0) + 13) % 26) + 'A'.charCodeAt(0));
    } else {
      caesar_str += str[i];
    }
  }
  return caesar_str;
}

console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
