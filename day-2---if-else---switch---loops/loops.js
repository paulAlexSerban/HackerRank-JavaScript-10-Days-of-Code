function vowelsAndConsonants(s) {
  const VOWELS = 'aeiou';
  let consonants = '';
  for (let i = 0; i < s.length; i++) {
    if (VOWELS.includes(s[i])) {
      console.log(`the vowels are: ${s[i]}`);
    } else {
      consonants += s[i] + '\n';
    }
  }
  console.log(`the consonants are: ${consonants.trim()}`);
}

vowelsAndConsonants('puzzles web crafts');