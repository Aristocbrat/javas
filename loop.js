/*const myMulNum = [1,2,3,4,5,6,7,8,9,10]
for (let x = 0; x <= myMulNum.length ; x++){
 for (let y=0; y<=myMulNum.length; y++){
  console.log(`${x} x ${y} = ${x*y}`)
 }}*/

 const myMulNum = [0,1,2,3,4,5,6,7,8,9,10]
for (let x = 0; x <= myMulNum.length-1 ; x++){
  console.log(`${x} x ${myMulNum[x]} = ${x*myMulNum[x]}`)
 }


function numbers() {
 let myList = [];
 for (let m = 0; m<=100; m++){
    myList.push(m);
 }
 return myList
}

let num = numbers()
let evenNum = num.filter(function(item)
{
   return item % 2 === 0
})
console.log(evenNum)

let oddNum = num.filter((item) => item % 2 !== 0)
console.log(oddNum)

//prime numbers



//sum 
let sum = num.reduce(function(result,item){
   return result + item ;
},0)
console.log (`the sum of 0 to 100 is ${sum}`)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
console.log(shoppingCart)
shoppingCart.push("Sugar")
console.log(shoppingCart)
shoppingCart[3]='Green tea'
console.log(shoppingCart)


const webTechs = [
   'HTML',
   'CSS',
   'JavaScript',
   'React',
   'Redux',
   'Node',
   'MongoDB'
 ]
 webTechs[8]="Sass"
 if (webTechs.includes("Sass")){
  console.log(`'Sass is a CSS preprocess'`)
 }













