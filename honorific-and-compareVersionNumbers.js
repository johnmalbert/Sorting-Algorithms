/* 
    Given an honorific (name title) and array of full name strings,
    in "LastName, FirstName" format
    
    Return a new array of strings in this format: "Honorific FirstName LastName"
    Bonus: re-write it with built in functional programming methods

    EXAMPLE:
    const hon = "Mr.";
    const names = [];

    addHonorific(hon, names) should return [] because there are no names to add an honorific
    to.

    const hon2 = "Sir";
    const names2 = ["Sanchez, Rick", "Smith, Jerry"];

    addHonorific(hon2, names2) should return ["Sir Rick Sanchez", "Sir Jerry Smith"]
*/
function addHonorific(honorific, fullNames){
    let result = [];
    for(k in fullNames){
        let name_Arr = fullNames[k].split(", ")
        result.push(`${honorific} ${name_Arr[1]} ${name_Arr[0]}`)
    }
    return result;
}
const hon2 = "Sir";
const names2 = ["Sanchez, Rick", "Smith, Jerry"];
console.log(addHonorific(hon2,names2));

const hon3 = "Sir Doctor Professor General";
const names3 = ["Marymee, Kyle", "Albert, John", "Beelendorf, Patrick", "Stoopes, Erik", "Soto, Aaron"];
console.log(addHonorific(hon3,names3));
/* 
    Given two strings, version1, and version2, both representing version numbers
    If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
    Helpful methods:
        - .split(characterToSplitOn)
        - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
        - .parseInt
        - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
    Bonus, solve without .split

    EXAMPLE:
    const test1V1 = "0.1";
    const test1V2 = "1.1";

    compareVersionNumbers(test1V1, test1V2) should return -1, because test1V1 is an earlier version
    than test1V2

    const test2V1 = "7.5.3";
    const test2V2 = "7.5.2.4";

    compareVersionNumbers(test2V1, test2V2) should also return 1, becaues 7.5.2.4 is an earlier
    version than 7.5.3
*/
function compareVersionNumbers(version1, version2){
    let v1 = version1.split(".")
    let v2 = version2.split(".")
    
    let v1i = 0
    let v2i = 0
    while(v1i < v1.length && v2i < v2.length){
        
        if(parseInt(v1[v1i]) > parseInt(v2[v2i]) ){
            return 1
        } else if (parseInt(v1[v1i]) < parseInt(v2[v2i])){
            return -1
        }

        
        v1i++
        v2i++
    }
    
    if (v1i == v1.length && v2i == v2.length && v1[v1i] == v2[v2i]) {

        return 0
    } else if(v1i == v1.length){
        return -1
    } else if (v2i == v2.length) {
        return 1
    }

    

}
const test2V1 = "7.5.3.9";
const test2V2 = "7.5.3.14";
console.log(compareVersionNumbers(test2V1, test2V2));

const test2V3 = "7.5.19.9";
const test2V4 = "7.5.3.9";
console.log(compareVersionNumbers(test2V3, test2V4));

const test2V5 = "7.5.3.9";
const test2V6 = "7.5.3.14.3.8.2.1.5.9";
console.log(compareVersionNumbers(test2V5, test2V6));

const test2V7 = "7.5.3.9";
const test2V8 = "7.5.3.9.3.8.2.1.5.9";
console.log(compareVersionNumbers(test2V7, test2V8));

const test2V9 = "7.5.3.9";
const test2V10 = "7.5.3.9";
console.log(compareVersionNumbers(test2V9, test2V10));

console.log("*********************************************************************")

function compareVersionNumbers2(version1, version2){
    var i = 0;
    var j = 0;
    while(i < version1.length || j < version2.length){
        let num1 = "";
        let num2 = "";
        while(version1[i] != '.'  && version1[i]){
            num1 += version1[i];
            i++;
        }
        while(version2[j] != '.'  && version2[j]){
            num2 += version2[j];
            j++;
        }
        if(parseInt(num1) < parseInt(num2) || num1 == ""){
            return -1;
        } else if(parseInt(num1) > parseInt(num2) || num2 == ""){
            return 1;
        }
        i++;
        j++;
    }

    return 0;
}


console.log(compareVersionNumbers2(test2V1, test2V2));


console.log(compareVersionNumbers2(test2V3, test2V4));


console.log(compareVersionNumbers2(test2V5, test2V6));

// const test2V7 = "7.5.3.9";
// const test2V8 = "7.5.3.9.3.8.2.1.5.9";
console.log(compareVersionNumbers2(test2V7, test2V8));

console.log(compareVersionNumbers2(test2V9, test2V10));