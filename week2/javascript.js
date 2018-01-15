// 1
console.log('سلام دنیا');
console.log('Hello world');

// 2 ==> console.log('I'm awesome');

console.log("I'm awesome");
          
// 3

var x;
console.log('I think the value of x is: null as it is not initialized yet!');
console.log(x);
x = 20;
console.log('I think the value of x is:  20');
console.log(x);

// 4

var y = 'Stay positive';
console.log('I think the value of y string is: "stay posivtive" as it is assigned to y string');
console.log(y);
y = 'This is JavaScript task.';
console.log('I think the value of string "y" is: "This is JavaScript task." as it is assigned to y string for the second time');
console.log(y);

// 5
var z =7.25;
console.log(z);
a=7;
console.log(a);
if (z>a)
console.log('"z" has bigger value');
else if(a)
console.log('"a" has bigger value');


// 6
var arr;
console.log('I think the value of arr is: null');
console.log(arr);

var favoriteAnimals;
favoriteAnimals=['Canary', 'Horse','Lion','Sarabi dog', "Daan's favorite animal (baby pig) "];
console.log(favoriteAnimals);

// 7

let myString = "this,is,a,test";
console.log(myString);
console.log(myString.length);

//8

let myAge=24;
console.log('the value of the variable myAge is: ' + myAge);
console.log('I think the type of the variable myAge is integer/number.')
console.log(typeof myAge);


let roomNum=321;
console.log('the value of the variable roomNum is: ' + roomNum);
console.log('I think the type of the variable roomNum is integer/number.');
console.log(typeof roomNum);


let bookPrice=40.99;
console.log('the value of the variable bookPrice is: ' + bookPrice);
console.log('I think the type of the variable bookPrice is float.');
console.log(typeof bookPrice);


var userName='Milaad';
console.log('the value of the variable userName is: ' + userName);
console.log('I think the type of the variable userName is string.');
console.log(typeof userName);

if ( typeof myAge== typeof roomNum)
  console.log('Variables have same datatypes');
else
  console.log('Variables have different datatypes');
if(typeof bookPrice== typeof userName)
  console.log('variables have same datatypes');
else
  console.log('variables have different datatypes');



//9

var x=7;
a= a % 3;
console.log(a);

var a=12;
var b=10;
c=a%b;
console.log(c);

var m=33.0;
var n=2.0;
p=m%n;
console.log(p);

var y=12;
var x= 9;
z=y%x;
console.log(z);

//10.1

var myUser=['qudrat', 10];
console.log(myUser);

//10.2

var x=6/0;
var y=10/0;
if(x===y)
  console.log( 'equal');
else 
console.log('not equal');
  
