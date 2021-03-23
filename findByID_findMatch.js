/* 
    Given a search criteria object whose values will only be
    primitives (ints, strings, booleans) and a list of objects.
    return any object that matches all the key value pairs in the search
    criteria object.
    Bonus: write a 2nd solution using built-in methods to practice functional
    programming.

    EXAMPLE:
    const search = {
        power_1: "Money",
        power_2: "Brooding"
    }

    const heroes = [
        {
            fName: "Clark",
            lName: "Kent",
            alias: "Superman",
            power_1: "Super strength",
            power_2: "Flight"
        },
        {
            fName: "Bruce",
            lName: "Wayne",
            alias: "Batman",
            power_1: "Money",
            power_2: "Brooding"
        },
        {
            fName: "Oliver",
            lName: "Queen",
            alias: "Green Arrow",
            power_1: "Money",
            power_2: "Bow and Arrow"
        },
        {
            fName: "Ryan",
            lName: "Choi",
            alias: "Atom",
            power_1: "Size alteration",
            power_2: "Intelligence"
        }
    ]

    find(search, heroes) should return:
    [
        {
            fName: "Bruce",
            lName: "Wayne",
            alias: "Batman",
            power_1: "Money",
            power_2: "Brooding"
        }
    ]

    even though there is only 1 match, it should still be in an array.

*/
function find(criteria, collection){
    //create an empty array
    var returnArray = [];
    //iterate through collection, looking for the criteria
    for(let i = 0; i < collection.length; i++){
      var curr = collection[i];
      // go through each criteria to see if collection[i] matches criteria
      var isMatch = true;
      for(let key in criteria){
        if(curr[key] !== criteria[key]){ //does the criteria at that key === collection item at that key?
          isMatch = false;
        }
      }
      if(isMatch === true){
        returnArray.push(curr);
      }
    }
    //return an array
    return returnArray;
  }
  const search = {
      power_1: "Money",
  }
  
  const heroes = [
      {
          fName: "Clark",
          lName: "Kent",
          alias: "Superman",
          power_1: "Super strength",
          power_2: "Flight"
      },
      {
          fName: "Bruce",
          lName: "Wayne",
          alias: "Batman",
          power_1: "Money",
          power_2: "Brooding"
      },
      {
          fName: "Oliver",
          lName: "Queen",
          alias: "Green Arrow",
          power_1: "Money",
          power_2: "Bow and Arrow"
      },
      {
          fName: "Ryan",
          lName: "Choi",
          alias: "Atom",
          power_1: "Size alteration",
          power_2: "Intelligence"
      }
  ]
   
  console.log(find(search,heroes));
  
  console.log("####################################################")
  console.log("####################################################")
  console.log("####################################################")
  
/* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found

    EXAMPLE:
*/
function findByIdAndUpdate(id, updateVals, collection) {
//collection is an array

// retrieve that object:
var curr = {}
for(var i = 0; i < collection.length; i++){
    if(collection[i].id === id){
    curr = collection[i];
    }
}
for(let key in updateVals){
    curr[key] = updateVals[key];
}
return curr;
// go through updateVals and change the values
}


const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false,
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false,
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false,
    },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true, isLateToday: true };

console.log(findByIdAndUpdate(id1, updateData1, students)); 
    // should return:
    // {
    //     id: 3,
    //     name: "student3",
    //     isLateToday: true,
    //     lateCount: 0,
    //     redBeltStatus: true,
    // }
