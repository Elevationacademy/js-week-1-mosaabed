// Conditional Statements
//ex1 
let numChildren = 11
const isCareful = true
if(!isCareful){
    numChildren +=1
}
console.log(numChildren) 

// ex2 
let letsilverwareCount = 20
if (letsilverwareCount %2 == 1){
    conole.log("there is something missing")
}


// ex3
if(performance == "good") {
    salary += goodBonus
} else if(performance == "stellar") {
  salary += stellarBonus
}

//ex4
const isVIP = false
let cash = 500

if(isVIP || cash > 300){
  console.log("welcome to the candy shop")
} else {
  console.log("go home")
}

//ex5 
/*
a = 3 
b = 15
c = 12
d = 160
*/
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2
console.log(a +" " +b +" " +c+ " " + d)


//ex6 

const gender = null
let profession = "business"
if (gender == "male") {
    profession += "man"
  }else if(gender == "female") {
    proession += "woman"
  }else {
    profession += "person"
  }
  
  console.log(profession)

  // ex7
  let boughtTesla = true
  const yearOfTeslaPurchase = 2014
  let isUSCitizen = true
  let currentYear = 2018

  if (boughtTesla && isUSCitizen ){
      console.log(" how long ago you bought your Tesla")
      if((currentYear - yearOfTeslaPurchase > 4))
      {
        console.log("would you like an upgrade")
      }else
      {
          console.log("would you satisfied with the car")
      }
      
  }else if(isUSCitizen)
  {
        console.log("would you like to move to the US")
  }else
  {
      console.log("arer you interested in buying one")
  }