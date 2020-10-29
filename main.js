// Scops

//===================================================================================
//Section 1 : error
//===================================================================================
const run = true  // run :global

if (run) {
    let distance = 8 // distance : local belong to the if scope
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}


console.log("Damn, you see this gal? She ran " + distance + " miles")    


//===================================================================================
//Section 2 : error
//===================================================================================
if (13 == "space") {
  let cowSound = "moo"
}
else {
  console.log("Cow says " + cowSound)
}


//===================================================================================
//Section 3 : console will log:
//            Served a special fish
//            Served a special lettuce plate
//            Served a special curious cheese
//            Finished serving all the orders: fish,lettuce plate,curious cheese
//===================================================================================
const serveOrders = function (orders) {
  // orders :local (serveOrders scope)
  for (let order of orders) {
      let specialOrder = "special " + order //orde & specialOrdeer : local (for scope)
      console.log("Served a " + specialOrder)
  }

  console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"] //global
serveOrders(allOrders)



//===================================================================================
//Section 4 :error
//===================================================================================
const pot = "red pot with earth in it" //global

const getSeed = function () {
    const seed = "brown seed" // local (getseed scope)
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()



//===================================================================================
//Section 5 - Optional(if you have time) :error
//===================================================================================
const doesUserExist = function (name) {
  const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }] // local
  for (let u of users) {
      if (u.name == name) {
          const found = true // local (for scope)
      }
  }
  return found // errror
}

const userExists = doesUserExist("Lucius")
if (userExists) {
  console.log("We found the ragamuffin!")
}
else {
  console.log("No idea where this person is.")
}


//===================================================================================
//Section 6 - Optional (if you have time) :error
//===================================================================================
const isEnough = false //global

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true // const can not be change error !!
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}