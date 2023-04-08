function telephoneCheck(str) {
  const regex = /^(?:(?:\+?1\s*(?:[-\.\s])?)?(?:\((?=\d{3}\)))?(?:\d{3})(?:\))?[\s.-]?\d{3}[\s.-]?\d{4})$/;
  const parenthesesCount = (str.match(/\(/g) || []).length - (str.match(/\)/g) || []).length;
  return regex.test(str) && parenthesesCount === 0;
}
