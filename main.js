// Objects

//ex1
let person1 = {
    name:"Mosa",
    age:22 ,
    city: "Iksal" 
}
let person2 = {
    name : "Easa",
    age :12 ,
    city : "Iksal"
}
if (person1.age == person2.age)
{
    if (person2.city == person1.city)
    {
        console.log("Jill wanted to date Robert")
    }else{
        console.log("Jill wanted to date Robert, but couldn't")
    }
}


//ex2
let myList =[{name :"Mosa" ,age : 21 },{name :"person", age : 80}]
myList[0].age++
myList.splice(1,1)
console.log(myList)


//ex3
const lst1= [{name: "Younes", age: 25}, {name: "Easa", age: 12}]
myList.push(...lst1)


//ex4
const library = {
    books: [
      {title: "tareek elnaja7", author: "Mosa"},
      {title: "alsabr mofta7 elnja7", author: "Mosa"},
    ]
  }
  myList.push(...library.books)

 
  
// ex5 + ex5.1 + ex5.2
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}
const editedName = lowerCaseName.charAt(0).toUpperCase() +
                   lowerCaseName.slice(1)

const name = prompt('Please enter the name for your reservation');
if(reservations[name] && !reservations[name].claimed) {
    alert("welcome" +name)
  } else if (reservations[name] && reservations[name].claimed){
    alert("someone already claimed this reservation")
  } else if (!reservations[name]) {
    alert("You have no reservation")
    reservations[name] = {claimed: true}
  }	
    console.log(reservations)