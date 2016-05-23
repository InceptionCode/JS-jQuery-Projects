
//When button is clicked run this function
 function buildWater () {
    var amount = 0; //amount you have
    var bottles = 10; //total amount of water bottles in store
    
    while(amount < bottles) {
        
        $("#here").text("You got a bottle.")// add this message to the span each time
        
        amount = amount += 1; // each click should add 1 towards your amount
        bottles = bottles -= amount;
        //If we are out of water
        if(bottles < amount){
            $('#done').text("Sorry we don't have anymore water....");
        }
    }
}

$("#btn").click(function(){
   buildWater();
});
