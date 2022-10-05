/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteNumber on one line; assign it a value on
 * the next line.
 */
let myFavoriteNumber = 0;
myFavoriteNumber = 5;
console.log(myFavoriteNumber);
/*
 * Prompt 2:
 *
 * Declare 3 variables using each of let, const, and var.
 */
let change = 0;
const doesntchange = 1;
var old = -1;
console.log(change);
console.log(doesntchange);
console.log(old);
/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

let something = 1;
console.log(something + 5);
console.log(something - 1);
console.log(something * 3);
console.log(something / 7);
console.log(something % 2);

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 */
let firstName = "Ryan ";
let lastName = "Saucier";
let fullName = firstName + lastName;
console.log(fullName);
/*
 * Prompt 5:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */
let hello = "hello ";
let world = "world!";
console.log(`${hello}${world}`);
/*
 * Prompt 7:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to true
 */

let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = "Kevin";

// a !! b;

// c _ d;

// 'Name' ___ 'Name';

// a _ b ___ c;

// a _ a ___ d;

// e ___ 'Kevin';

// 48 ___ '48';

/*
 * Prompt 8:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to false
 */

a = 6;
b = 100;
c = -5;
d = 3000;
e = "Jelly Bean";

// a ! b;

// c _ d;

// 'Peanut' ___ 'Peanut';

// a _ b ___ c;

// a _ a ___ d;

// e ___ 'Jelly Bean';

// 48 ___ '48';

/*
 * Prompt 9:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ["Marty Marion", "Marty Feldman", "Marty McFly", "Marty Marion"];
let array2 = [
  ["Marty Feldman", "Marty Marion"],
  ["Marty Stuart", "Marty McFly"],
  ["Marty Jannetty", "Marty Robbins"],
];
let array3 = [
  ["Marty Feldman", ["Marty Marion"]],
  ["Marty Stuart", ["Marty Janetty", ["Marty McFly"], "Marty Robbins"]],
];

//answer
console.log(array1[2]);
console.log(array2[1][1]);
console.log(array3[1][1][1][0]);

/*
 * Prompt 10:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ["a", "b", "c", "d", "e"];

//answer
console.log(array4[array4.length - 2]);

/*
 * Prompt 11:
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ["Thom", 1000, "Christchurch"];
let karolin = ["Karolin", 16, "New York"];
let kristyn = ["Kristyn", 5, "Pittsburgh"];
let cathleen = ["Cathleen", 186, "New York"];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Gameboy".
thom.splice(0, 1, "gameboy");
console.log(thom);
// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.
karolin.splice(1, 1, "17");
console.log(karolin);
// Change Cathleen's hometown from New York to "Gotham City".
cathleen.splice(2, 1, "Gotham City");
console.log(cathleen);
// Remove "Pittsburgh" from Kristyn's array and add "Oakland".
kristyn.splice(2, 1, "Oakland");
console.log(kristyn);
