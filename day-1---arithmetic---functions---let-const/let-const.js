function circleProperties(arg) {
  let r = arg;
  const PI = Math.PI;

  if ((0 < r) && (100 >= r)) {
    console.log(`Area of the circle is ${PI*r*r}`);
    console.log(`Perimeter of the circle is ${PI*2*r}`);
  }
}

circleProperties(13);