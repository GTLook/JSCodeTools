const people = require('./people.js')
//console.log(Object.keys(people[0]))

// people.forEach(function (person) {
//   console.log(person.name)
// })

// function eachName (){
//   let data = []
//   data.push(people[i].forEach(function(i){ return $people[i].name.first) " " +people[i].name.last}))
//   return data
// }
// eachName()

// console.log(people.map(person => person.name.first+' '+person.name.last))

const allPeople = people.map(person => person.name.first+' '+person.name.last)

const peopleStates = people.map(person => person.address.state)

const peopleCali = people.filter(person => person.address.state == 'California').map(person => person.name.first+' '+person.name.last)

//let finalArray=[]
// const peopleFriends = people
// .map(person => person.friends)
// .reduce(function (accumulator, person){ return accumulator.concat(person.friends)}, [])

// console.log(peopleFriends)

// Return a list of all people with brown eyes who are also active.

const peopleBrown = people.filter(person => person.isActive === true).filter(person => person.eyeColor == 'brown').map(person => person.name.first+' '+person.name.last)

// console.log(peopleBrown)

// Return a list of everyone who has a balance of over $2,000. Only
// return their balance, their first and last name, and their full
// address:
// [ { 
//      name: 'Cathryn Potts',
//      address: '123 Main St, Gotham, NY, 19321',
//      balance: '$4,021'
//   }, ...
// ]

const overBalance = people
.filter(person => person.balance > '$2000')
.map(function (person){
  let newObject = {}
      newObject['name']= person.name.first+' '+person.name.last
      newObject['address']= `${person.address.line1} ${person.address.city}, ${person.address.state}, ${person.address.zip}`
      newObject['balance']= person.balance
  return newObject
})

//console.log(overBalance)

// Return a unique list of all the states represented by people in our list.

const uniqueState = people
.map(person => person.address.state) 
.reduce((accumulator, state)=>{
  if(accumulator.indexOf(state)===-1){accumulator.push(state)}
  return accumulator
},[])
console.log(uniqueState)

// Return a boolean that represents whether or not anyone has a balance of over $10,000. (every?)

const OverMoney = people.every(person => person.balance > '$10000')
//console.log(OverMoney)

// Do any of our active users live in North Carolina? Return a boolean representation. (some?)

