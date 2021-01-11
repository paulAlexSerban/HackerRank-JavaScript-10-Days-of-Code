function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
   * followed by one or more letters.
   */
  
  
  /*
   * Do not remove the return statement
   */
  const re = /^(Mr?s|[MDE]r)\.[A-Za-z]+$/;
  return re;
}

const R = regexVar();
const STRING = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry';

console.log(R.test(STRING));