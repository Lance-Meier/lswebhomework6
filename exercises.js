//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
    return num * 10;
}

function subtractFive(num) {
  //return num after subtracting five
    return num - 5;
}

function areSameLength(str1, str2) {
    if (str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
}
  //return true if the two strings have the same length
  //otherwise return false

function areEqual(x, y) {
    if (x === y) {
        return true;
    } else {
        return false;
    }
  //return true if x and y are the same
  //otherwise return false
}

function lessThanNinety(num) {
    if (num < 90) {
        return true;
    } else {
        return false;
    }
  //return true if num is less than ninety
  //otherwise return false
}

function greaterThanFifty(num) {
    if (num > 50) {
        return true;
    } else {
        return false;
    }
  //return true if num is greater than fifty
  //otherwise return false
}

function add(x, y) {
    return x + y;
  //add x and y together and return the value
}

function subtract(x, y) {
    return x - y;
  //subtract y from x and return the value
}

function divide(x, y) {
    return x / y;
  //divide x by y and return the value
}

function multiply(x, y) {
    return x * y;
  //multiply x by y and return the value
}

function getRemainder(x, y) {
    return x % y;
  //return the remainder from dividing x by y
}

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
  //return true if num is even
  //otherwise return false
}

function isOdd(num) {
    if (num % 2 === 1) {
        return true;
    } else {
        return false;
    }
  //return true if num is odd
  //otherwise return false
}

function square(num) {
    return num * num;
  //square num and return the new value
}

function cube(num) {
    return num * num * num;
  //cube num and return the new value
}

function raiseToPower(num, exponent) {
    return Math.pow(num, exponent);
  //raise num to whatever power is passed in as exponent
}

function roundNumber(num) {
    return Math.round(num);
  //round num and return it
}

function roundUp(num) {
    return Math.ceil(num);
  //round num up and return it
}

function addExclamationPoint(str) {
    return str + '!';
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
}

function combineNames(firstName, lastName) {
    return firstName + ' '  + lastName;
    
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
}

function getGreeting(name) {
    return 'Hello ' + name + '!';
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
    return length * width;
  //return the area of the rectangle by using length and width
}

function getTriangleArea(base, height) {
    return (base * height) / 2;
  //return the area of the triangle by using base and height
}

function getCircleArea(radius) {
    return Math.round(Math.pow(radius, 2) * Math.PI);
  //return the rounded area of the circle given the radius
}

function getRectangularPrismVolume(length, width, height) {
    return length * width * height;
  //return the area of the 3D rectangular prism given the length, width, and height
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
