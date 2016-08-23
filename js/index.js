
$(document).ready(function () {
(function buildWater() {
   var amount = 0,//amount you have
	   bottles = 10; //total amount of water bottles in store

    $("#btn").click(function () {
       bottles = bottles -=1; // each click should subtract 1 from bottles amount.
       if (bottles > amount) {
        // add this message to the span each time
         $("#here").text("You got a bottle." + " " + "You have" +" " + bottles + " " +"left");
       } else {
         $('#done').text("Sorry we don't have anymore water....");
         $("#here").text("You got a bottle." + " " + "You have" +" "+ "0 bottles left");
       }
    });
})();

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
  var $amount = $('#title4 span');

  $('#grow-button').on('click',function () {
  		$('img').animate({
  			'height': '+=2px'
  		});
  	   $amount.text(count);
  		count++;
  	});

//Fill the bar
//When the button is pressed change the background of nth span to ocean color
(function fill () {
var span = [
            '#bar span:nth-child(1)',
            '#bar span:nth-child(2)',
            '#bar span:nth-child(3)',
            '#bar span:nth-child(4)',
            '#bar span:nth-child(5)'
          ],
          i = -1;

  $('#fill-button').click(function () {
    (i <= 5) ? i++ : i = 5;
     $(span[i]).css({
      'background': '#00C0FF'
    })
  });

})();

});

//Functional Programming

//ForEach
var array = [1,2,4,5];
array.forEach((item,index)=> console.log(array[index]));

//Every
var array2 = [{name: "Will Smith", age: 45}, {name: "Jada Pinkett", age: 40}];
var true_or_false = [];
var age = array2.every(value => value.age > 39);
true_or_false.push(age);
//console.log(true_or_false) => True

//Some
var some = [];
var someTrue = array2.some(value => value.age > 40);
some.push(someTrue);
//console.log(some) => True

//MAP
var users = [
{ first: "James",
  last: "smith"
},
{
  first: "Brian",
  last: "Lewis"
}
];
var names = users.map(name => name.first + " " + name.last);

//console.log(names) => ["James Smith", "Brian Lewis"]

//Filter
var people = [
  {number: 1, name: "Karry"},
  {number: 2, name: "Jordan"},
  {number: 3, name: "Kevin"},
  {number: 4, name: "Larry"}
];

var oddPeople = people.filter(num => num.number % 2 );
//console.log(oddPeople) => [{number: 1, name: "Karry"}, {number: 3, name: "Kevin"}]

//Reduce
var numbers = function (num1) {
    return function (num2) {
        var lessNumbers = [num1, num2].reduce((prev, curr) => {
                          return prev + curr
                        });
        console.log(lessNumbers);
    }
}

var first = numbers(1);
var second = numbers(2);
var third = numbers(3);

first(5);
second(5);
third(5);

//Currying

var greeting = function (greeting, name) {
  return greeting + ' ' + name;
}
greeting("Hello", "James");
//return => "Hello James"

var curriedGreeting = (greeting) =>
                            (name) => {
                              console.log('Curried' + ' ' + name);
                              return greeting + ' ' + name;
                            }
curriedGreeting("Wassup")("Kevin");


var superCurriedGreeting = (greeting) =>
                              (seperator) =>
                                (emphasis) =>
                                  (name) => {
                                    console.log("Super cool Curried "+ " " + greeting + seperator + name + emphasis);
                                  }
var coolGreeting = superCurriedGreeting("Wassup")('. . .');
coolGreeting("!")("Kevin");

//Composition or Compose
var compose = function(f, g) {
  return function(x) {
    return f(g(x));
  };
};

var toUpperCase = function(x) {
  return x.toUpperCase();
};
var exclaim = function(x) {
  return x + '!';
};

var shout = compose(exclaim, toUpperCase);
console.log(shout("All I needed was some"));

var head = (x) => x[0];
var reverse = (x)=> x.reduce(function(acc, x) {
  return [x].concat(acc);
}, []);

var last = compose(head,reverse);

console.log(last(['jumpkick', 'roundhouse', 'uppercut']));

var lastUpper = compose(toUpperCase,compose(head,reverse));

console.log(lastUpper(['jumpkick', 'roundhouse', 'uppercut']));
