/* 
    Interview question that Neil received.
    Given two vars, x and y that store integers, swap their values WITHOUT
    creating any new variables or using any data types.
    Don't worry about creating a function either.
    No destructuring
*/
let x = 5;
let y = 3;

console.log(x,y);

// your code here
//do some kind of math to swap the values:

//make a variable = the sum
//set the other variable = the sum - itself

// x = x + y;
// y = x - y;
// x = x - y;

x = x * y;
y = x / y;
x = x / y;

console.log(x,y);


/* 
    Time in Words
    Write a function that accepts 2 numbers, hour and minute, for hour of the day and minutes of the hour,
    and return a string of the time. Follow these patterns:
                5:00 --> five o' clock
                5:01 --> one minute past five
                5:10 --> ten minutes past five
                5:15 --> quarter past five
                5:30 --> half past five
                5:40 --> twenty minutes to six
                5:45 --> quarter to six
                5:47 --> thirteen minutes to six
                5:28 --> twenty eight minutes past five

    EXAMPLE:
    let h = 5;
    let m = 47;

    timeInWords(h, m) should return "thirteen minutes to six"
*/
function timeInWords(hour, minute){
    let returnStringHours = "";
    let returnStringMin="";
    var dict = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        21: "twenty-one",
        22: "twenty-two",
        23: "twenty-three",
        24: "twenty-four",
        25: "twenty-five",
        26: "twenty-six",
        27: "twenty-seven",
        28: "twenty-eight",
        29: "twenty-nine"
    }
    var dict2 = {
        00: "o'clock ",
        15: "quarter past ",
        30: "half past ",
        45: "quarter to "
    }
    if(minute === 00){
        return(dict[hour] + " o' clock")
    }
    if(dict2[minute]){
        return ( dict2[minute] + " " + dict[hour]);
    }else if(minute < 30){
        return (dict[minute] + " past " + dict[hour])
    }else{
        return (dict[60 - minute] + " to " + dict[hour])
    }
}

let h = 5;
let m = 12;

console.log(timeInWords(h, m));
h = 4;
m = 00;

console.log(timeInWords(h, m));
h = 6;
m = 15;

console.log(timeInWords(h, m));
h = 5;
m = 30;

console.log(timeInWords(h, m));
h = 5;
m = 45;

console.log(timeInWords(h, m));
h = 5;
m = 13;

console.log(timeInWords(h, m));
h = 5;
m = 37;

console.log(timeInWords(h, m));
console.log(timeInWords(12, 44));
console.log(timeInWords(3, 39));
console.log(timeInWords(11, 29));
console.log(timeInWords(29, 41));
console.log(timeInWords(8, 07));