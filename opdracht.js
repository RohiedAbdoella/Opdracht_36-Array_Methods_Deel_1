//A
/*
const addTheWordCool = function(array){
    return array + array.push("cool");
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]
*/
/*
const addTheWordCool = ["nice", "awesome", "tof"] {
    return addTheWordCool.push("cool");
}

console.log("Add cool:", addTheWordCool();
// resultaat: ["nice", "awesome", "tof", "cool"]
*/
//B
const amountOfElementsInArray = function (array) {
    return array.length;
} 

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
  // 3

//C
/*
const selectBelgiumFromBenelux = function (array) {
    return array.shift;
}

console.log(selectBelgiumFromBenelux[0](["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie" 
*/

const selectBelgiumFromBenelux = ["Belgie", "Nederland", "Luxemburg"]
const first = selectBelgiumFromBenelux[0]

console.log(first); 
// resultaat: "Belgie" 


//D
const lastElementInArray = function (array) {
    return array.findInde(3);
}


console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
  // resultaat: "Schildpad"

//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
const impeachTrumpSlice = function(array) {
 return presidents.slice;
}
const impeachTrumpSplice = function(array) {
return presidents.splice;
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//F
const stringsTogether = function (array) {
    return array.join;
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

//G
const combineArrays = function (array) {
    return array.concat;
}

console.log(combineArrays([1,2,3], [4,5,6]) )
// resultaat: [1,2,3,4,5,6]