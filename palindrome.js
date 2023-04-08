function palindrome(str) {
  str = str.toLowerCase()
  let modified_str = ''
  let modified_str2 = ''
  for(let i=0;i<str.length; i++){
    if((str[i]<='z' & str[i]>='a') || (str[i]<='9' & str[i]>='1')){
      modified_str+=str[i];
    }
  }

  for(let i=modified_str.length-1;i>=0; i--){
      modified_str2+=modified_str[i];
  }
 for(let i=modified_str.length-1;i>=0; i--){
   if(modified_str[i]!==modified_str2[i]){
     return false;
   }
 }
 return true;
}

