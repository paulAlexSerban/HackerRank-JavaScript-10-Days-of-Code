function getMaxLessThanKOne(n, k) {
  let max_anb = 0;
  for (let b = n; b > 0; b--) {
    for (let a = b - 1; a > 0; a--) {
      if ((a & b) < k && (a & b) > max_anb) {
        max_anb = (a & b);
      }
    }
  }
  return max_anb;
}

const getMaxLessThanKTwo = (n, k) => {
  let max_value = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      if (Number(i & j) < k) { // This line
        if (Number(i & j) > max_value) { // And this line
          max_value = i & j;
        }
      }
    }
  }
  return max_value;
}

function getMaxLessThanKThree(n, k) {
  return ((k | (k - 1)) > n) ? (k - 2) : (k - 1);
}