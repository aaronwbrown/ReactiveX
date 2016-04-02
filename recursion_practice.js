// generate fibonacci recursively

// The next number is found by adding up the two numbers before it.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...

// iterative solution

var fib = function(length) {
  var fibArr = [], i = 0, j = 1;

  fibArr.push(i);
  fibArr.push(j);

  while (fibArr.length <= length) {
    fibArr.push(fibArr[j] + fibArr[i]);
    j++;
    i++;
  }

  return fibArr;

};

// console.log(fib(15));

// recursive implementation
// The next number is found by adding up the two numbers before it.


var fibR = function(n) {
  if(n <= 2) {
    return 1;
  } else {
    return fibR(n - 1) + fibR(n - 2);
  }
};

console.log(fibR(5));

var printFib = function(n) {

  var results = [];

  for (var i = 0; i <= n; i++) {
    results.push(i + ": " + fibR(i));
  }

  return results;

};

console.log(printFib(15));



// var memoize = function(func) {
//   var cache = {};

//   return function() {
//     var args = Array.prototype.slice.call(arguments).join("");

//     if (args in cache) {
//       return cache[args];
//     } else {
//       return cache[args] = func.apply(this, arguments);
//     }
//   };

// };

var memoizer = function(memo, func) {

  var recur = function(n) {
    var result = memo[n];
    if (typeof result !== "number") {
      result = func(recur, n);
      memo[n] = result;
    }
      return result;
  };

  return recur;

};

var fibonacci = memoizer([0,1], function(recur, n) {
  return recur(n-1) + recur(n-2);
});

console.log(fibonacci(10));

var reverse = memoizer([0,""], function(recur, str) {
  return recur(str.slice(1)) + str.charAt(0);
});

console.log(reverse("house"));





// factorial

var fact = function(num) {

  if (num === 0) {
    return 1;
  } else {
    return num * fact(num - 1);
  }

};

// console.log(fact(5));


// insertion sort iteration

var insertion_sort = function(items) {
  var len = items.length, value, i, j;

  for (i = 0; i < len; i++) {
        // store the current value becasue it may shift later
        value = items[i];
         /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
         for (j = i-1; j > -1 && items[j] > value; j--) {
           items[j + 1] = items[j];
         }
         items[j+1] = value;
       }
       return items;
     };

// console.log(insertion_sort([3, 5, 2, 1, 8, 10, 9]));


// Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

var exponent = function(base, exp) {
  // base case
    // if exp === 0 return result of base
  // recursive
    // subtract one from exp and multiply base * base
    if (exp === 0) {
      return 1;
    } else {
      return base * exponent(base, exp - 1);
    }

  };

// console.log(exponent(2,3));

var myArray = [1, 2, 3, 4, 5, 6];

var sumR = function(array) {

  if (array.length === 1) {
    return array[0];
  } else {
    return array.pop() + sumR(array);
  }

};

// console.log(sumR(myArray));


// Write a JavaScript program for binary search.
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'

//  linear search example

var binS = function(array, target) {
  var result = [];
  var arrayCopy = array.slice();
  // base case -- array.length === 1
  // pop each item from array and then compare it against the target

  var binR = function(array, target) {

    if (array.length <= 1) {
      return result[0];
    } else {
      var item = array.shift();
      if (item === target) {
        result.push(item);
        return binR(array, target);
      } else {
        return binR(array, target);
      }
    }

  };

  return binR(arrayCopy, target);


};

// console.log(binS(myArray, 4));

// Let min = 0min=0 and max = n-1max=n−1.
// If max < minmax<min, then stop; targettarget is not present in arrayarray. Return -1.
// Compute guessguess as the average of maxmax and minmin, rounded down so that it is an integer.
// If array[guess]array[guess] equals targettarget, then stop. You found it! Return guessguess.
// If the guess was too low, that is, array[guess] < targetarray[guess]<target, then set min = guess + 1min=guess+1.
// Otherwise, the guess was too high. Set max = guess - 1max=guess−1.
// Go back to step two.

var binarySearch = function(array, target) {
  var arrayCopy = array.slice();



};


var countdown = function(value) {
  if (value <= 0) {
    return value;
  } else {
    console.log(value);
    return countdown(value - 1);
  }
};

// console.log(countdown(10));

var isPrime = function(n) {
  var divisor = 2;

  while (n > divisor) {
    if (n % divisor === 0) {
      return false;
    } else {
      divisor++;
    }
  }
  return true;
};

// console.log(isPrime(237));









