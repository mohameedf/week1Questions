/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */
// its can take data of manth and get the beast day to sell
function BestProfit1(arr)
{
  let days = [ "Saturday","Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday" , "wait to the next week"];  
   let indexOfTheBestBuy= arr.indexOf(Math.min(...arr));
   let indexOfTheBestSale= arr.indexOf(arr.slice(indexOfTheBestBuy+1).reduce((a, b=arr[indexOfTheBestbuy]) => a > b ? a :b)); 
  //im useing the (%7) to make the index btween 0 - 6 to get the day of the week 
  return({
      buy:`the beast day to buy is${((indexOfTheBestBuy+1)/7)>1? " in the next "+Math.ceil(indexOfTheBestBuy/7)+" week at " : " in ths week at "} ${days[indexOfTheBestBuy % 7]}`,
      sell:`the beast day to sell is${((indexOfTheBestSale+1)/7)>1? " in the next "+Math.ceil(indexOfTheBestSale/7)+" week at " : " in ths week at "} ${days[indexOfTheBestSale % 7]}`
     });
}
function BestProfit(arr){
              //[150,       146,      142,     143      , 145        , 144] 
  let days = [ "Saturday","Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday" , "wait to the next week"];  
   const indexOfTheBestBuy= arr.indexOf(Math.min(...arr));
   let indexOfTheBestSale = 0;
   let max=-1;
   for (let i = indexOfTheBestBuy+1; i < arr.length; i++) {
       const element = arr[i];
        console.log(element);
        if (element > arr[indexOfTheBestBuy] && arr[indexOfTheBestBuy] > max) {
           indexOfTheBestSale =i;
           max =element;
        }
    }
    if (indexOfTheBestSale===0) {
       indexOfTheBestSale=8;
    }
    return({buy:`the beast day to buy is ${days[indexOfTheBestBuy]}`,
    sell:`the beast day to sell is ${days[indexOfTheBestSale]}`});
}
console.log(BestProfit([150, 146, 142, 143, 145, 144]));

/** Q2
* assume you have two time periods
* for example
* period1 = 13/5/2021 01:00 to 14/5/2021 01:00
* period2 = 15/5/2021 01:00 to 16/5/2021 01:00
* write a function that tells us whether two given periods overlap or not
* example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
* example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
*/
function dateDto(dateTimeForFormat){
   let data=dateTimeForFormat.split(' ');
   let dayMonthYear = data[0].split('/')
   let hourMinit =data[1];
   return (dayMonthYear[2]+"-"+dayMonthYear[1]+"-"+dayMonthYear[0]+" "+hourMinit);
}
function CheckOverlap(t1Start, t1End, t2Start, t2End) {
   t1Start1 = new Date(dateDto(t1Start));
   t1End = new Date(dateDto(t1End));
   t2Start = new Date(dateDto(t2Start));
   t2End = new Date(dateDto(t2End));
   let overlap = (t1Start <= t2End) || (t2Start <= t1End);
   return overlap? "overlap":"No overlap";
}
console.log(
   CheckOverlap(
     "13/5/2021 13:00",
     "14/5/2021 13:00",
     "14/5/2021 13:00",
     "16/5/2021 13:00"
   )
 );
 console.log(CheckOverlap(
     "13/5/2021 13:00",
     "14/5/2021 13:00",
     "15/5/2021 13:00",
      "16/5/2021 13:00"
      ));

/** Q3
* assume you have a shoes factory and the production lines produces shoes as follows
* L R LL R R RR LL
* write a function that takes these shoes as in a string
* shoes = "RLRLRRLL"
* then return how many pairs in it
* result = 4
* example HowManyPairs("RLRLRRLL") => 3
* example HowManyPairs("RRLLRRRLLR") => 1
*/

function HowManyPairs1(shoes) {
   shoes= shoes.split(''); 
   let rPair = shoes.reduce( (a, v) => (v === 'R' ? a + 1 : a),0);
   let lPair = shoes.reduce( (a, v) => (v === 'L' ? a + 1 : a),0);
   return ((rPair>lPair)?lPair:rPair);
}
function HowManyPairs2(shoes) {
   shoes= shoes.split(''); 
   let r=0;
   let l=0;
   let stock=0;
   for (const iterator of shoes) {
       if (iterator ==='R') {
           r++;
       }
       if (iterator ==='L') {
           l++;
       }
       if (r === l && r>0 && l>0) {
           stock++;r=0;l=0;
       }
   }
   
   return (stock);
}
// console.log(HowManyPairs2("RRLLRRRLLR"));
/** Q4
*    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
*    letterCount('abcac') => {a: 2, b: 1, c: 2}
*/
function HowManyLetters(word) {
   let result ={};
   //this Map method has side effect on result to set the value of the chars number 
   word.split('').map((ch)=> (!(ch in result)) ? result[ch]=1:result[ch]+=1);
   return result;
}
function HowManyLetters2(word) {
   result ={};
   word= word.split('');
    for (const ch of word) {
        (!(ch in result)) ? result[ch]=1:result[ch]+=1;
       }
       return result;
}
//console.log(HowManyLetters("kkssffoos"));

/** Q5
* Write a binary search function
*/

function BinarySearch(element, arr) {
   arr=arr.sort();
   //remove the Duplicates 
   arr= Array.from(new Set(arr));
   console.log(arr); 
   let low = -1, height = arr.length;
   while (1 + low < height) {
           const mid = low + ((height - low) > 1);
           if (element < (arr[mid])) {
               height = mid;
           } else {
           }
           low = mid;
       }
       return({sortedArray:arr , value: element, index: height});
}

//  console.log(BinarySearch(5, [4, 2, 5, 2, 1, 4, 6, 7, 9]));
//  console.log(BinarySearch(1, [4, 2, 5, 2, 1, 5, 6, 1, 9]));
//  console.log(BinarySearch(2, [4, 2, 5, 2, 1, 5, 6, 1]));

/** Q6
 * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.

Examples
sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]

sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]

sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
Notes
The arrays can contain either positive or negative elements.
The arrays will only contain integers.
The arrays won't contain duplicate numbers.
This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
 */
function sortArray(array){
    
        for (let i = 0; i < array.length; i++) {
            for (let j = i; j < array.length; j++) {
               if (array[i] > array[j]) {
                   let temp = array[i]
                   array[i] = array[j];
                   array[j] =temp;
               }
            }
        }
        return array;
}
//   console.log(sortArray([2, -5, 1, 4, 7, 8]));
//   console.log(sortArray([38, 57, 45, 18, 47, 39]));

/** Q7
 * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
 */
let minMax=(arr)=>([arr.reduce((a,b)=> a<b?a:b),arr.reduce((a,b)=> a>b?a:b)])

//console.log(minMax([2334454, 5]));

/** Q8
 * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

Examples
missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
Notes
The array of numbers will be unsorted (not in order).
Only one number will be missing.
 */
function missingNum(arr){
   arr= arr.sort((a,b)=> a-b);
   for (let i = 0; i <= arr.length; i++) 
       if(arr[i]!== i+1)
           return i+1; 
   }
// console.log( missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));
// console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
/** Q9
 * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.

Examples
numToEng(0) ➞ "zero"

numToEng(18) ➞ "eighteen"

numToEng(126) ➞ "one hundred twenty six"

numToEng(909) ➞ "nine hundred nine"
Notes
There are no hyphens used (e.g. "thirty five" not "thirty-five").
The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
 */

  const numToEng = (number) => {
    const lessThanTwenty = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    const tenthsLessThanHundred = [
    'zero',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
    ];
    
      let numberChars = number.toString().split('');
      
      return number;
  };
  console.log(numToEng(998));
/** Q10
 * Create a function that squares every digit of a number.

Examples
squareDigits(9119) ➞ 811181

squareDigits(2483) ➞ 416649

squareDigits(3212) ➞ 9414
Notes
The function receives an integer and must return an integer.
 */
let squareDigits = (num)=> (num.toString().split('').map((a) => a*a).join(''));

//console.log(squareDigits(9119));
/** Q11
 * Write a method that returns array of all the numbers from 1 to an integer argument.
 *  But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”.
 *  For numbers which are multiples of both three and five use “FizzBuzz”.

Example
fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]

fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
Notes
Make sure to return an array.
 */
function fizzBuzz (number){
   let result =[];
     for (let i = 1; i <= number; i++) {
         result.push((i%3===0 && i%5===0)?"FizzBuzz":(i%3===0)? "Fizz":(i%5===0)? "Buzz":i);
     }
     return result;
}
//console.log(fizzBuzz(15));

/** Q12
 * Create a function that concatenates n input arrays, where n is variable.

Examples
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
Notes
Arrays should be concatenated in order of the arguments.
 */
function concat(...array){
   let result =[];
   for (const item of array) {
       for (const subItem of item) {
           result.push(subItem);
       }
   }
   return result;
} 

let concat2 =(...array)=>array.flat();

//console.log(concat([1, 2, 3], [4, 5], [6, 7]));
/** Q13
 * Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
Notes
Notice that num is also included in the returned array.
 */
function arrayOfMultiples(num, length){
    for (let i = 0; i < length; i++) {
         array[i]= i!=0? (i+1)*num : num;
    }
    return array;
}
//console.log(arrayOfMultiples(7, 5));
/** Q14
 * I'm trying to write a function to flatten an array of subarrays into one array.
 *  (Suppose I am unware there is a .flat() method in the Array prototype). 
 * In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

Here is my code:

function flatten(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.concat(arr[i]);
  }
  return arr2;
}
But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

Examples
flatten([[1, 2], [3, 4]]) ➞ []
// Expected: [1, 2, 3, 4]

flatten([["a", "b"], ["c", "d"]]) ➞ []
// Expected: ["a", "b", "c", "d"]

flatten([[true, false], [false, false]]) ➞ []
// Expected: [true, false, false, false]

 */
function flatten(...arr) {
   let arr2 = [];
   for (let i = 0; i < arr.length; i++) {
       // here is the problem concat function dosnt chang the valu of original array value
       arr2 = arr2.concat(...arr[i]);
     console.log(arr2);
   }
   return arr2;
 }
 //console.log(flatten([["a", "b"], ["c", "d"]]));

/** Q15
 * Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

Examples
testJackpot(["@", "@", "@", "@"]) ➞ true

testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
Notes
The elements must be exactly identical for there to be a jackpot.
 */
function testJackpot (arr){
   for (let i = 1; i < arr.length; i++) {
       if(arr[i] != arr[i-1]){
           return false;
       }
   }
   return true;
}
let testJackpot2 = (arr)=> arr.every(elem => elem === arr[0]);

console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
/** Q16
 * Create a function that takes an array of numbers and returns the second largest number.

Examples
secondLargest([10, 40, 30, 20, 50]) ➞ 40

secondLargest([25, 143, 89, 13, 105]) ➞ 105

secondLargest([54, 23, 11, 17, 10]) ➞ 23
Notes
There will be at least two numbers in the array.
 */
function secondLargest(array){
    let firstMaxIndex = array.indexOf(array.reduce((a,b)=> a>b?a:b));
    let secondMax=-1;
    for (let i = 0; i < array.length; i++) {
        if (( secondMax < array[i])&& i != firstMaxIndex) {
            secondMax = array[i];
        }
    }
    return secondMax;
}
let secondLargest2 = (arr)=> arr.sort()[arr.length >= 2 ?arr.length -2:arr.length -1];

console.log(secondLargest([54, 23]));
/** Q17
 * Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

Examples
numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]
Notes
All numbers will be integers.
You can expect negative numbers too.
 */
let numberSplit =(number)=> (number%2 === 0)? [(number/2),(number/2)] :number >= 0? [Math.ceil((number/2)),Math.floor((number/2))]:[Math.floor((number/2)),Math.ceil((number/2))];
console.log(numberSplit(-9));

/** Q18
 * Create a function that takes an array of strings and return an array, sorted from shortest to longest.

Examples
sortByLength(["Google", "Apple", "Microsoft"])
➞ ["Apple", "Google", "Microsoft"]

sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

sortByLength(["Turing", "Einstein", "Jung"])
➞ ["Jung", "Turing", "Einstein"]
Notes
All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.
 */
function sortByLength (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
           if (array[i].length > array[j].length) {
               let temp = array[i]
               array[i] = array[j];
               array[j] =temp;
           }
        }
    }
    return array;
}
let sortByLength2 =(array)=>array.sort((a,b)=> a.length - b.length);
console.log(sortByLength2(["Turing", "Einstein", "Jung"]));
/** Q19
 * Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

Examples
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]

findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
Notes
Watch out for negative integers (numbers).
 */
function findLargestNums(array){
    let result=[]; 
    for (const iterator of array) {
            result.push(iterator.reduce((a,b)=>a>b?a:b))
    }
    return result;
}
let findLargestNums2 =(array)=> array.map((a)=> a.reduce((c,d)=>c>d?c:d));
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));
/** Q20
 * A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.

[1, 3, 3, 5, 5, 5]
// original array

[1, 3, 5]
// original array transformed into a set
Create a function that sorts an array and removes all duplicate items from it.
Examples
set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]

set([4, 4, 4, 4]) ➞ [4]

set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]

set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
Notes
For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).
See resources for a hint if you get stuck.
 */
//  arr= Array.from(new Set(arr));
function set2(array){
    let result=[];
    for (const iterator of array) {
        if(!result.includes(iterator))
         result.push(iterator);        
    }
    return result.sort((a,b)=>a-b);
}
 
let set = (array)=> Array.from(new Set(array)).sort((a,b)=>a-b);
 
 console.log(set([5, 7, 8, 9, 10, 15]));
 console.log(set2([3, 3, 3, 2, 1]));