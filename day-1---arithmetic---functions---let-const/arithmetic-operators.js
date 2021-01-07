function getArea(length, width) {
  let area;
  return (((1 <= length) && (1 <= width)) && ((1000 >= length) && (1000 >= width)) ? area = length.toFixed(3) * width.toFixed(3) : null);
}

function getPerimeter(length, width) {
  let perimeter;
  return (((1 <= length) && (1 <= width)) && ((1000 >= length) && (1000 >= width)) ? perimeter = (length.toFixed(3) * 2) + (width.toFixed(3) * 2) : null);
}

console.log(`The AREA is: ${getArea(12, 10)}`);
console.log(`The PERIMETER is: ${getPerimeter(30, 10)}`);