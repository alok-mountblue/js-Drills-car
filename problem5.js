// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

export function problem5(inventory){

if(inventory.length==0){
  return [inventory,0];
}
let oldCars=[];
let j=0;

for(let i=0;i < inventory.length;i++){
    if (inventory[i].car_year < 2000) {
        oldCars[j]=inventory[i];
        j++;
      }

}
return [oldCars,j];
   
}