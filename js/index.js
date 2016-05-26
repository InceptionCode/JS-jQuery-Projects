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
var $this = $('.dig-container span:nth-child(n)');

$('#btn-2').click(function () {
	$this.show();
		
	function dig (clicks) {
		function howLow() {
			$this.text('dig');
			console.log(clicks);
			console.log($this.text());
		}
		return howLow ();	
	}
	
	for(i = 0; i < $this.length; i++){
		dig(i);
		if(i === 4) {
			$('.stop').show();
		}
	}
});
	
	

//I want to fill each span with each button click one at a time.
// I have to grab the button and add a click function.
//The click function must include the variables that allow the closure to work.
