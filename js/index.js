$(document).ready(function () {
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
var $this = $('.dig-container span');

function dig(size) {
	return function (width) {
		$this.show().animate({
			'font-size': size + 'px',
			'border-bottom': '5px solid rgba(0,0,0,0.4)',
			'width': width + 'px'
		});
	};
}
var size34 = dig(34),
	size44 = dig(44),
	size54 = dig(54);

$('#btn-1').click(function () {
	size34(60);
	$this.text('dig');
});
$('#btn-2').click(function () {
	size44(90);
});
$('#btn-3').click(function () {
	size54(120);
	$('.stop').show().animate({
		'width': '+=20'
	});
});

/* The goal is to increase the size and width of the span by each click.
Also, add some animation or delay to the change in span.
I know I neccessarily don't need to use a closure but I wanted to find some practical use for one. 
This was meant just for practice. */


$('#box-button').click(function () {
	$('.box').animate({
		'left': '+=15px'
	});

//only can be ran once box-button is clicked
	$('#box-button2').show().click(function () {
			$('.box').animate({
			'left': '-=15px'
		});
	});
})

//How tall can you make the building
var count = 1;
$('#grow-button').on('click',function () {
		$('img').animate({
			'height': '+=1px'
		});
		var $amount = $('#title4 span');
	   $amount.text(count);
		count++;
	});
});
 