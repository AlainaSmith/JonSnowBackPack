/*
console.log('hello world')

let backpack = []

/*backpack.push('sword')
backpack.push('shield')
backpack.push('food')
*/
/*
backpack.push('sword', 'shield', 'food')

//let sword = backpack.shift()
let sword = backpack.splice(0, 1) //go to index 0, and remove 1 thing
//even when we splice it out, the result of splicing results in an array, if we wanted to remove two things, it would remove sword and shield, starting at sword.

//backpack.unshift(sword[0])

let furCoat = 'fur coat'

backpack.push(furCoat)

backpack.pop()

let itemCount = backpack.length

backpack.push('flint', 'blanket', 'knife', 'toothbrush')



//split up this stuff into one other backpack

let backpack2 = backpack.splice(2, 3) //now we console.log(backpack, backpack2)


//write a loop that will iteratite the backpack array and console,log everything in that array

// EXAMPLE for(let i=0; i < 3; i++){     if we had more things in the backpack, it would only run the array 3 times anyway and still only consider three items
// console.log(backpack[1]) 
//}
//if we only had 2 items in the array, then id have an extra iteration the third thing will show as undefined.
If there are less things in the backpack then what the iteration is set to run at then justuse the length. 

/*for(let i=0; i < backpack.length; i++){
    console.log(backpack[1]) 
}


for(let i=0; i < backpack2.length; i++){
    console.log(backpack2[i])
}
*/
/*
if(backpack.length >=3){
    for(let i = 0; i < 3 ; i++){
        console.log(backpack[1])
    }
}
else {
    for(let i = 0; i < backpack.length; i++) {     
        console.log(backpack[i])
    }
}
}

*/

    //else for let i eqaul 0 as long as i is less then backpack.
    //length and increment by 1 and inside the code black is console.log(backpack[i])
    //if we put three things instead, then that would be a hard coded conditon, it would work but if we added something to the array later on then it would not work. This is considered dynamic.



//console.log(backpack2[0]) //how many items in the backpack




//What is the final value of guessMe?

// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log('thiscanbeanythingyouwant', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 == 0) {
        console.log('guessMe is divisible by 4 or 5. Added 25')
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log('guessMe is divisible by 3. Subtracted 27')
        guessMe -= 27
    } else {
        console.log('Added 3')
        guessMe += 3
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now ${guessMe}`)
    
    console.log(guessMe)
}


//if its divisible by 3 then it will subtract -27
//if it doesnt hit two of those conditions itll go down to the third else.
//

//1. 54, 49, 74, 99, 