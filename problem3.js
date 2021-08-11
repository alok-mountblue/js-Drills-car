
export let problem3=function problem3(inventory){

   if(inventory.length==0){
      return inventory;
   }else{

   let carModels=[];
   for (let i = 0; i < inventory.length; i++) 
     carModels[i] = inventory[i].car_model.toLocaleLowerCase();

    var i = 0;
    var j;
    while (i < carModels.length) {
        j = i + 1;
      while (j < carModels.length) {
          if (carModels[j] < carModels[i]) {
             var tempStr = carModels[i];
             carModels[i] = carModels[j];
             carModels[j] = tempStr;
            }
            j++;
         }
     i++;
   }

   return carModels;
}
}