function filterByKey(collection, searchFor, searchBy){
    //search for key that exits in the object
    //return new array
    var returnArray = [];
    for(let i = 0; i < collection.length; i++){
    let curr = collection[i];
    //if it is a match
    //find lName in collection[i]
    //compare curr[searchBy] to search
    let str1 = curr[searchBy].toLowerCase();
    let str2 = searchFor.toLowerCase();
    if(str1.startsWith(str2)){
    // console.log(`curr ${curr[searchBy]} matches ${searchFor}`);
    returnArray.push(curr);
    }
}

return returnArray;  
}
const coll = [
    {
        fName: "Bill",
        lName: "Bob"
    },
    {
        fName: "Mary",
        lName: "Smith"
    },
    {
        fName: "Joey",
        lName: "Smony"
    }
]

let search = "S";
let searchBy = "lName"

console.log(filterByKey(coll,search,searchBy));
console.log("###############################################");
console.log(filterByKey2(coll,search,searchBy));
console.log("###############################################");
console.log(filterByKey3(coll,search,searchBy));

//second solution:

function filterByKey2(collection, searchFor, searchBy, method='startsWith'){
    // collection.filter(name -> (name[searchBy])).startsWith(searchFor))
    return collection.filter(name=>String(name[searchBy].toLowerCase())[method](searchFor.toLowerCase()));
}


function filterByKey3(collection, searchFor, searchBy){
    const matches = [];
    for(const item of collection){
        let isMatch = true;
        for (let i = 0; i < searchFor.length; i++) {
            if(item[searchBy][i] !== searchFor[i]){
                isMatch = false;
                break;
            }
        }
        if(isMatch){
            matches.push(item);
        }
    }
    return matches;
}