

//

var targetNumber= Math.floor(Math.random()* 68)+20;
$("#numer-to-guess").text(targetNumber);
console.log(targetNumber);

var counter=0; 
var images = ["./assets/images/singe-pink-crystal-diamond-14463279.jpg","./assets/images/292531D4-E49A-11E4-9BF7-CF118CEE446B.png","./assets/images/swarovski-crystal-yellow-opal-930x580.jpg","./assets/images/images.jpg"]
var numberOptions = [5, 7, 10, 3];

//function start game
    for (var i = 0; i < 4; i++){
        var random = Math.floor(Math.random()* 20)+1;
        var crystal = $("<img>");
        crystal.addClass("crystal-images");
        crystal.attr("src", images[i]);
        crystal.attr("height", "100");
        crystal.attr("width", "100");
        crystal.attr("data-crystalvalue", random);
        $("#crystals").append(crystal);
    }


$(".crystal-images").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue")); 
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    alert("Your new score is " + counter);

    if (counter === targetNumber) {
        alert("You win!");
      }
    else if (counter >= targetNumber){
        alert("You Lose!");
    }
//set reset function

});
