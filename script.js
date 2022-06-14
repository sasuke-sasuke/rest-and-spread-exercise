// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
//Refactor
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

//findMin
const findMin = (...nums) => nums.reduce((min, current) => current < min ? current : min);

//mergeObjects  ????
const mergeObjects = (obj1, obj2) => obj1.reduce((acc, val ) => ({val, ...acc}),obj2);
//mergeObjects({a:1,b:2}, {c:3, d:4})

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...nums) => nums.reduce((acc, num) => [...acc, num * 2] ,arr)
//doubleAndReturnArgs([1,2,3],4,4)


