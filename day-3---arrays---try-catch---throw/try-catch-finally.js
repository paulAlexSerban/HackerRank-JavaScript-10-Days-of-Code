function reverseString(s) {
  try {
      s = s.split("").reverse().join("");
  } catch(e) {
      console.log(e.message);
  } finally {
      console.log(s);
  }
}

console.log(reverseString('JavaScript is fun on HackerRank'));