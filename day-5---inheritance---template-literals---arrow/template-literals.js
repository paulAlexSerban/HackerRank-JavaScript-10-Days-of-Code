function sides(literals, ...expressions) {
  const A = expressions[0];
  const P = expressions[1];
  let answers = [];
  let s1 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
  let s2 = (P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;

  answers.push(s1);
  answers.push(s2);

  return answers.sort();
}