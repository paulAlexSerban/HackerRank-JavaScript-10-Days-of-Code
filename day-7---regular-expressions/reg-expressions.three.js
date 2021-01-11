function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  /*
   * Do not remove the return statement
   */
  return new RegExp('\\d+', 'g');
}

const R = regexVar();
const STRING = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry';

console.log(R.test(STRING));