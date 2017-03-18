
 var calculatorModule = (function(){


  var memory = 0;
  var total = 0;
  var calculator = {};

    calculator.load = function(x) {
      total = x;

      if(typeof x !== "number"){
        throw new Error("Wrong Data type!!");
   }
   return total;

};



  calculator.getTotal = function(x) {
      return total;
};

  calculator.add = function(x){
      total += x;
       if(typeof x !== "number"){
         throw new Error("Wrong Data type!!");
   }
   return total;
};


  calculator.subtract = function(x) {
      total-=x;

      if(typeof x !== "number"){
        throw new Error("Wrong Data type!!");
   }
    return total;
};


   calculator.multiply = function(x) {
    total *= x;

      if(typeof x !== "number"){
        throw new Error("Wrong Data type!!");
   }
   return total;
};

   calculator.divide = function(x) {
    total /= x;

      if(typeof x !== "number"){
        throw new Error("Wrong Data type!!");
    }
    return total;
   };

   calculator.recallMemory = function(){
    return memory;
   };

   calculator.saveMemory = function(){
    memory = total;
    return memory;
   };

   calculator.clearMemory = function(){
    memory = 0;
   };






return calculator;
});
