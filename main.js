function bil(x,y){
    console.log("Your Prestnt Unit " +x );
    console.log("Your Privious Unit " +y );
    let z = x-y;
    console.log(z)
/* here used unit is down to 50 par unit cost 5 tk .form 51 to 100 par uint cost 8 tk form 101 to 200 par unit cost 12 tk 201 to 250 par unit 15 tk upto 251 tk is18  */
    if(z<=50){
        console.log(z*2)
    }
    else if(z=51 || z>=100){
        console.log(z*8)
        
    }
    else(z<=250)
        console.log(z*18  )
    

}
bil(612,50);