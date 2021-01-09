function modifyArrayOne(nums) {
  let something = function (n) {
    if (n % 2 == 0)
      return n * 2;
    else
      return n * 3;
  }

  let newArray = nums.map(something);
  return newArray;
}

function modifyArrayTwo(nums) {
  let something = function (n) {
    let a = (n % 2 == 0) ? n * 2 : n * 3;
    return a;
  }

  let newArray = nums.map(something);
  return newArray;
}

function modifyArrayThree(nums) {
  let something = n => n = (n % 2 == 0) ? n * 2 : n * 3;
  let newArray = nums.map(something);
  return newArray;
}

function modifyArrayFour(nums) {
  let newArray = nums.map(n => n = (n % 2 == 0) ? n * 2 : n * 3);
  return newArray;
}

function modifyArrayFive(nums) {
  return nums.map(n => n = (n % 2 == 0) ? n * 2 : n * 3);
}