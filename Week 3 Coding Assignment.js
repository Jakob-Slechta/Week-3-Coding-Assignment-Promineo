var ages = [3, 9, 23, 64, 2, 8, 28, 93];

let x = ages[ages.length - 1] - ages[0];

console.log(x);

ages.push(115);

x = ages[ages.length - 1] - ages[0];

console.log(x);

numbers = 0;
for(i = 0; i < ages.length; i++) {
    console.log(ages[i]);
    numbers += ages[i];
    var average = numbers / ages.length;
}

console.log(average);



let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; 
let nameLengths = names.map(function(element){
    return element.length;
});
let nameSum = nameLengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
},);



for(namesR of names) {
    console.log(namesR);
    x = names.length
    nameAvg = nameSum / x;
}
console.log(x)
console.log(nameLengths);
console.log(nameSum);
console.log(nameAvg);
//I printed all of these out to make sure everything was working as intended.


var namesArray = ["Kelly", "Sam", "Kate"];
nameLengths = namesArray.map(function(element){
    return element.length;
});
for (i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i] + " " + nameLengths[i]);
}

for (i = 0; i < nameLengths.length; i++) {
    console.log(nameLengths[i]);
    
}
sum = nameLengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

console.log(sum);

function helloPrinter(word, n) {
    if (n > 0) {
        return word.repeat(n);
        
    }
    else {
        return "Not a big enough number."
    };
}

console.log(helloPrinter("Hello", 8));
//The function works just fine, returning the desired result.

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName("Angelo", "Garcia"));
console.log(fullName("Danny", "Desuza"));
//The function is a success with any name it tries to print.

numberArray = [30, 45, 23];

function lessIsMore(i) {
    if (i < 100) {
        return true
    } else {
        return false
    }
}

console.log(lessIsMore(22, 16, 44));
console.log(lessIsMore(numberArray));
console.log(lessIsMore(80, 60, 66));
// Note 2, which upon further inspection explains why this last log here will show as true.
//It's only reading the first number.


var anotherArray = [20, 20, 25];

function allTogether(moreNumbers) {
    const sum = moreNumbers.reduce((a, b) => a + b, 0);
    return sum / moreNumbers.length;
}

console.log(allTogether(anotherArray));
//console.log(allTogether(28, 54, 63));
console.log(allTogether[20, 20, 20]);
//I had actually been getting errors this whole time, I'd been unaware that I NEEDED to define the array
//and not just put some numbers in the parameters. Check note 2.
//Testing out to see if I can just make an array on the spot doesn't work either sadly. :c
//So a good note here is that I seem to absolutely need the array made before putting it through a function.



function ultimateChecker(firstArray, secondArray) {
    const a = firstArray.reduce((a, b) => a + b, 0);
    const b = secondArray.reduce((a, b) => a + b, 0);
    return a / firstArray.length > b / secondArray.length;
}

var pinkArray = [20, 40, 86, 92];
var floydArray = [2, 4, 6, 8];

console.log(ultimateChecker(pinkArray, floydArray));
console.log(ultimateChecker(floydArray, pinkArray));
//changing the places of the two gave different boolean results! It's working!
//I still don't entirely understand how the reduce method works, but reusing the code from allTogether was vital here!

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(true, 10.60));
console.log(willBuyDrink(false, 10.60));
console.log(willBuyDrink(true, 7.50));
//Just the note as a reminder: Only the first log is true because of BOTH parameters being true for the
//function. As a result the second two are both false, despite each having at least one true statement.

function friendTeaser(nameOfFriend) {
    console.log(nameOfFriend + " is very smelly.")
}

friendTeaser("Danny");
//I decided to make a function that would type out the rest of my juvenile teasing for me.
//It fills out the rest of what I need based on the name I input, therefore it's useful if I 
// wish to call someone smelly.
