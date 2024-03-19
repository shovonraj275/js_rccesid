
const array1 = [5, 12, 8, 130, 145, 44,60];
/* find */
console.log("find");
const found = array1.find((element) => element > 10);
console.log(found)
console.log("Find index grter Than 10 : "+found)
/* findindexs */
console.log("findindexs");

const findIndexnumber = (element) => element > 10;

console.log(array1.findIndex(findIndexnumber));
const findIndexnumbers =array1.findIndex(findIndexnumber);
console.log("In this array we see that grter Than 10 is but in this array 5 and 8 grter Than 10 that means 2 but return 1. The resoen is 12 is large : "+findIndexnumbers)
// -------
const foundslast = array1.findLast((element) => element > 45);
console.log(foundslast);
console.log("Find index grter Than 45 : "+foundslast);

// ----
const LargeNumbers = (element) => element > 45;

console.log(array1.findLastIndex(LargeNumbers));




// Expected output: 3

// const array= [1,2,3,4,5,6,7,8,9,10]
// console.log(array.with(2,11))
// const array2 =["shovon" , "sara" , "shathy"]
// console.log( "Main arrey : " + array2)
// console.log("Change arrey : "+array2.with(0,"Ezaz")) 
// // change one value in  this arrey Function 
// function bil(x,y){
//     console.log("Your Prestnt Unit " +x );
//     console.log("Your Privious Unit " +y );
//     let z = x-y;
//     console.log(z)
// /* here used unit is down to 50 par unit cost 5 tk .form 51 to 100 par uint cost 8 tk form 101 to 200 par unit cost 12 tk 201 to 250 par unit 15 tk upto 251 tk is18  */
//     if(z<=50){
//         console.log(z*2)
//     }
//     else if(z=51 || z>=100){
//         console.log(z*8)
        
//     }
//     else(z<=250)
//         console.log(z*18  )
    

// }
// bil(612,50);
