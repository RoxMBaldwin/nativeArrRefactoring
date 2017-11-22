// TODO: refactor the following functions to use native methods: forEach, map, reduce, filter, etc.

// If you pass ["Sue", "Will"] it should return "Sue and Will"
// If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"

// function toSentence(arr) {
//   var result = "";
//   if (arr.length === 0) {
//       return result;
//   }
//   for (var i = 0; i < arr.length - 2; i++) {
//     result += arr[i] + ", ";
//   }
//   return result + arr[arr.length - 2] + " and " + arr[arr.length - 1];
// }

const toSentence = function(arr){
  let joinNames = arr.reduce((sentance, name, currentIndex, names) => {
    if ( currentIndex > names.length - 2  ){
      sentance += ' and ' + name
    } else if ( currentIndex === names.length - 1 ){
      sentance += name
    } else {
      sentance += name + ', '
    }
    return sentance
  }, '')
  return joinNames
}

// let nameArr = ["Sue", "Will", "Rachel", "Roxx"]
//
// toSentence(nameArr)

// If you pass 1 it should return [1]
// If you pass 3 it should return [1,2,3]
function arrayONumbers(num) {
    var result = [];
    for (var i = 1; i <= num; i++) {
        result.push(i);
    }
    return result;
}

// If you pass ["Sue", "Will"] it should return "SW"
// If you pass ["Java", "Script", "Object", "Notation"] it should return "JSON"

// function toAcronym(arr) {
//     var result = "";
//     for (var i = 0; i < arr.length; i++) {
//         result += arr[i].charAt();
//     }
//     return result;
// }

const acronym = function(arr){
  let abbreviated = arr.reduce((label, word) => {
    label += word[0]
    return label
  }, '')
  return abbreviated
}

// Given [1, 3, 2, 1, 3], 1, and 4, then return [4, 3, 2, 4, 3]
function replace(arr, from, to) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
      result.push(arr[i]);
      if (arr[i] === from) {
          result[i] = to;
      }
  }
  return result;
}

// TESTS
// TODO: write actual tests
//console.log("toSentence", toSentence(["Sue", "Will", "Rachel"]) === "Sue, Will and Rachel")
//console.log("arrayOfNumbers", arrayOfNumbers(3)[2] === 3)
//console.log("acronym", acronym(["Java", "Script", "Object", "Notation"]) === "JSON")
//console.log("replace", replace([1, 3, 2, 1, 3], 1, 4)[0] === 4)
