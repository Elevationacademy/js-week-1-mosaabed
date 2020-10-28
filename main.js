//Variables & Operation
//ex1 
const maxCapacity = 14 
let surfTime = true
let bestStudent 
//const purposeInlife
//console.log(maxCapacity)

//ex2 
const str1 = "Let's try this "
const str2 = str1 + "is the best thing ever"
console.log(str2)

//ex3 
const password = "hello world"
const confirmPassword = "hello world"
console.log(password == confirmPassword)

//ex4
x = 423 *12
y = 802/2
z = (5+6)*3
console.log (x + ' ' + y + ' ' + z)

// ex5 
console.log((5 > 2) && false) // false
console.log(!("knife" === "sword")) //true
console.log((1 < 2) || (-1 > -1) || !false) // true
console.log(("a") && true) // not boolean 
console. log((31 % 5) == "1") //true
console.log(!!true) //true 
console.log("5th Avenue" != "5th Avenue")//fales
console.log(52 !== "52" )//true
console.log(undefined || null) //null

 //ex6
let a = 3
a = 4
let c = 0
let b = a
b = 2
a = b
b = c
c = a
a = b

console.log(a) // 0
console.log(b) // 0
console.log(c) // 2