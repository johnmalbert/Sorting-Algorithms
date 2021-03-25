function lens(obj, keys){
    
    let depth = obj;
    for(let k in keys){
      if(depth[keys[k]]){
         depth = depth[keys[k]]
      }
       else {
        return null;
      }
    }
    return depth
}
const user = {
    id: 101,
    email: "jack@dev.com",
    personalInfo: {
        name: "Jack",
        address: {
            line1: "westwish st",
            line2: "washmasher",
            city: "wallas",
            state: "WX",
        },
    },
    favorites: {
        number: 0
    }
};

const keys1 = ["personalInfo", "address", "city"];
const keys2 = ["personalInfo", "address", "country"];
console.log(lens(user,keys1));
console.log(lens(user,keys2));




function getMaxServings(recipe, available){
    let min;
    for(let key in recipe){
        let qtyNeeded = recipe[key];
        let qtyAvailable = available[key];
        if(!qtyAvailable){
            return 0;
        }

        let total = Math.floor(qtyAvailable / qtyNeeded);
        
        if(total < 1){
            return 0;
        }
        
        if(!min || total < min){
            min = total
        }
    }

    return min;

}

const recipe1 = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    "spicy": 5,
    "gourmet memes": 4200,
};
const available1 = {
    "organic fat": Infinity,
    "live squid": 3,
    "birds nest": 10,
    "fried flesh": 10,
    "spicy": 50,
    "gourmet memes": 42000,
    "sugar": 9001,
    "spice": 5,
    "everything nice": 1,
    "triple point water": 5,
};

console.log(getMaxServings(recipe1, available1));
