//When button is clicked run this function
 function buildWater() {
    var amount = 0,//amount you have
	     bottles = 10; //total amount of water bottles in store
    
    while (amount < bottles) {
        
        $("#here").text("You got a bottle."); // add this message to the span each time
        
        amount = amount += 1; // each click should add 1 towards your amount
        bottles = bottles -= amount;
        //If we are out of water
        if (bottles < amount) {
            $('#done').text("Sorry we don't have anymore water....");
        }
    }
}

$("#btn").click(function () {
   buildWater();
});

//Testing my closure skills
function dig (deep) {
	var howLow = function (low) {
		return deep * low;
	}
	return howLow;
};

//I want to fill each span with each button click one at a time.
// I have to grab the button and add a click function.
//The click function must include the variables that allow the closure to work.

var amount1 = dig(1);

$('#btn-2').click(function () {
	
	amount1(1);
	
	for(i = 0; i < 5; i += 1) {
		var $this = $('.dig-container span:nth-child(n)');
		
		$this.text('dig');
		
		if(i === 4){
			$('.stop').show();
		}
	}

});