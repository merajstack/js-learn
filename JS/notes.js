// // ================== BASIC JAVASCRIPT FULL PRACTICE ==================
// // 👉 Run the HTML file.Check the code and console output alternatively.
// // 👉 Follow all prompts & alerts step-by-step
// // 👉 Learn core JS concepts with hands-on practice
// // ================================================================
// alert("Enter all valid details for clear outputs")
// /* ================= OBJECT DATA HANDLING ================= */
// const insta = { // object data handling
//     Name: "Meraj",
//     posts: 300,
//     followers: "295k",
//     following: 4,
//     Feild: "Engineering",
//     bio: "Learning to innovate"
// };

// insta.following = insta.following + 1; // Increments by 1
// insta.followers = insta.followers + 1; // Adds 1 as string = 295k1
// console.log(insta.Feild, insta.following, insta.followers);


// //-------------------------------------------------------------------------------

// /* ================= ARITHMETIC OPERATORS ================= */
// let a = 5;
// let b = 10;

// let sum  = a + b;
// let prod = a * b;
// let diff = b - a;
// let div  = b / a;
// let mod  = b % a;
// let exp  = a ** b;

// console.log(sum, prod, diff, div, mod, exp);


// //-------------------------------------------------------------------------------

// /* ================= PRE / POST INCREMENT ================= */
// let a1 = 10;

// console.log(a1++); // doesn't show increment immediately (post increment)
// console.log(a1);   // increment reflected here

// let x = 20;

// console.log(++x); // pre increment (works immediately)
// console.log(x);   // already incremented


// //-------------------------------------------------------------------------------

// /* ================= EQUAL vs STRICT EQUAL ================= */
// var a2 = 100;
// var b2 = '100';

// if (a2 == b2) {
//     console.log(a2 == b2, "but", a2 !== b2);
// }


// //-------------------------------------------------------------------------------

// /* ================= IF ELSE CONDITIONS ================= */
// let mode = prompt('Please enter mode (dark,eco,light)');
// let color;

// if (mode == "dark") {
//     color = "black";
// }
// else if (mode == "eco") { // corrected comparison
//     color = "mint green";
// }
// else {
//     color = "white";
// }

// console.log(color);


// //-------------------------------------------------------------------------------

// /* ================= SINGLE LINE IF ================= */
// let mode2 = prompt('Please enter mode (dark only)');

// if (mode2 == "dark") console.log("The color is black");


// //-------------------------------------------------------------------------------

// /* ================= TERNARY OPERATOR ================= */
// let age = prompt("Enter the age(to check driving elgibility)");

// let res = age > 18 ? "Legal" : "illegal";
// console.log("It is", res, "for him to drive");


// //-------------------------------------------------------------------------------

// /* ================= SWITCH CASE ================= */
// let x1 = 100;
// let y1 = 150;

// switch (true) {
//     case x1 > y1:
//         console.log(x1);
//         break;

//     default:
//         console.log(y1);
//         break;
// }


// //-------------------------------------------------------------------------------

// /* ================= MULTIPLE OF 5 ================= */
// let uI = prompt("Enter number:(to check multiple of 5 )");

// if (uI % 5 === 0) {
//     console.log(uI, "is a multiple of 5");
// } else {
//     console.log(uI, "is not a multiple of 5");
// }


// //-------------------------------------------------------------------------------

// /* ================= FOR LOOP (TABLE) ================= */
// let ui = prompt("Enter a num for table:(for loop)");

// if (ui >= 1) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(ui, "*", i, "=", ui * i);
//     }
// } else {
//     console.log("Enter a valid number greater than 0");
// }


// //-------------------------------------------------------------------------------

// /* ================= WHILE LOOP ================= */
// let ui2 = prompt("Enter a num for table:(while loop)");
// let c = 1;

// while (c <= 10) {
//     console.log(ui2, "*", c, "=", ui2 * c);
//     c++;
// }


// //-------------------------------------------------------------------------------

// /* ================= FOR...OF LOOP ================= */
//  let arr = ["meraj", "raj", 10];

// for (let i of arr) {
//     console.log(i);
// }

// let str = "javascript";

// for (let j of str) {
//     console.log(j);
// }


// //-------------------------------------------------------------------------------

// /* ================= OBJECT ITERATION ================= */
// const data = {
//     name: "meraj",
//     age: 18,
//     edu: "B-Tech"
// };

// for (let key in data) {
//     console.log("Key:", key, "and Value:", data[key]);
// }


// //-------------------------------------------------------------------------------

// /* ================= EVEN NUMBERS ================= */
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// //-------------------------------------------------------------------------------

// /* ================= GUESSING GAME ================= */
// let guess = Number(prompt("Guess the number (It's 23 😎)"));

// while (guess != 23) {
//     if (guess < 23) {
//         alert("You guessed a lower number");
//     } else {
//         alert("You guessed a higher number");
//     }

//     guess = prompt("Guess again");
// }

// alert("You guessed the right number!");


// //-------------------------------------------------------------------------------

// /* ================= STRINGS ================= */
// alert("These details are for learning strings,Make sure spellings are right!")
// let s = prompt("Enter your name");
// let age1 = prompt("Enter your age");
// let course = prompt("Enter your course");

// console.log(s[0]);       // indexing
// console.log(s.length);   // length

// let bio = `Hello I am ${s} and I'm ${age1} years old. My course is ${course}`;
// console.log(bio);


// //-------------------------------------------------------------------------------

// /* ================= STRING MANIPULATION ================= */
// let name = "      Meraj Stack.     ";

// console.log(name.trim());
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());


// //-------------------------------------------------------------------------------

// /* ================= STRING METHODS ================= */
// let fname = "Meraj";
// let lname = "Stack";

// console.log(fname.concat(" " + lname));

// let user_name = prompt("Enter your Name:(for string methods)");
// console.log("@" + user_name.concat(user_name.length));

//-------------------------------------------------------------------------------

// /* ================= ARRAYS ================= */
// let arr2 = [1, 2, 3, 4, 5];

// console.log(arr2);
// console.log(arr2[2]);

// arr2[5] = 6;

// console.log(arr2);

// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
// }

// Question to solve for array(avg marks)
/*let arr = [11,24,54,66,98,33]
let avg=0;
for (let i = 0 ;i<arr.length;i++){
    avg +=arr[i];
}
 avg = avg/arr.length;
console.log(avg)*/

// Question to solve for array(discount prices)
// let arr = [250,645,300,900,50];
// for (let i = 0;i<arr.length;i++){
//     arr[i]= arr[i]*0.9;
// }
// console.log(arr)

// let arr = [250,645,300,900,50]; // array methods
// console.log(arr.slice(1,4)); //Slicing (returns a part of array)
// arr.splice(1,2,100,200);
// //-->go to index 1 , delete 2 elements , replace with 100,200
// console.log(arr)

// arr.push(75,85); // adds 75,85 to end
// console.log(arr);

// arr.pop(); // deletes from end (85) and returns it
// console.log(arr);

// arr = arr.toString(); // converts array to string (returns a string)
// console.log(typeof arr[0]);

// let arr = [ "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
// ------ Remove first element --------
// arr.reverse();
// arr.pop();
// console.log(arr);
//------ Replace uber with ola ---------
// arr.splice(2,1,"Ola");
// console.log(arr);
// ------ Add Amazon at the end ---------
// arr.push("Amazon")
// console.log(arr);

//-------------------------------------------------------------------------------

// /* ================= FUNCTIONS ================= */
// function Userdata(name,age,course,country){ // Basic Function
//        console.log(name)
// }
// console.log(Userdata("Meraj",18,"Eng","India"))

// function Userdata(name,...rest){ // Rest parameter
//        console.log(name),
//        console.log(rest)
// }
// Userdata("Meraj",18,"Eng","India")

// function Userdata(name, age, profession, country) {//Spread operators
//     console.log(name);
//     console.log(age);
//     console.log(profession);
//     console.log(country);
// }
// const details = [18, "Eng", "India"];
// Userdata("Meraj", ...details);
//------ Arrow Functions ---------
// const sum = (a,b)=>{
//     return a+b ;
// }
// console.log(sum(2,9));
//Calculator on arrow fns 
// const calc = (a,b,v)=>{
//     if(v = 'sum'){
//         return a+b;
//     }
//     else if (v = 'diff'){
//         return a-b;
//     }
//     else if (v = 'prod'){
//         return a*b;
//     }
//     else if (v = 'div'){
//         return a/b;
//     }
// }
// let a = 10;
// let b = 5;
// let v = "prod";
// console.log(calc(a,b,v))
//  ---------- forEach Method --------
// let arr = [ "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// // arr.forEach() // --> syntax 
// arr.forEach((val)=>{
//     console.log(val);})

// //Question for "forEach" Method(Squaring)
// let arr = [1,2,3,4,5,6,7];
// arr.forEach((val)=>{
//     console.log(val*val);
// })
//  ---------- More Methods --------
// let arr = [87,93,64,99,86];
// let toppers = arr.filter((val)=>{
//     return val>90;
// })
// console.log(toppers);
//--------Task---------
// Question 2: Take a number n as input from the user. Create an array of numbers from 1 to n.   
// Use the reduce method to calculate the sum of all numbers in the array.   
// Use the reduce method to calculate the product of all numbers in the array.
//-------------------------------------------------------------------------------

// /* ================= SYNC/ASYNC ================= */
// console.log("one");
// console.log("two");
// console.log("three");
/* Executes step by step (synchronus)
Where as async code continues flow even though 
the program is blocked due to prev instructions*/
//Code 1 -->executes
//Code 2 
//API. ----->runs
//Code 3 -->executes
//Code 4 -->executes

// /* ================= SET TIMEOUT/SET INTERVAL ================= */
// function hello(){
//     console.log("Hello Iam Meraj")
// }
// setTimeout(hello,5000)// hello function executes after 2000ms(2s).
// setTimeout(()=>{
//     console.log("Hello World!") // Arrow function.
// },5000);
// setInterval(() => {
//     console.log("hello World");//Prints Hello World every 5000ms (2)s.
// }, 5000);

// /* === SET TIMEOUT/SET INTERVAL RELATION WITH  ASYNC CODE === */
// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("async code") // Executes at the end as its asynchronus
// },2000);
// console.log("three");
// console.log("four");







