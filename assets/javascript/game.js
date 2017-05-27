//crystal collector

//variables
var randam;
var blue1;
var red1;
var green1;
var purple1;

var winNum = 0;
var lossNum = 0;
var tempSum = 0;

//start game
$(document).ready(function() {
random = Math.floor((Math.random() * 120) + 19);
blue1 = Math.floor((Math.random() * 12) + 1); 
red1 = Math.floor((Math.random() * 12) + 1); 
green1 = Math.floor((Math.random() * 12) + 1); 
purple1 = Math.floor((Math.random() * 12) + 1);
//print to test
console.log(blue1);
console.log(red1);
console.log(green1);
console.log(purple1);
//create variable to hold random number
var randomDisplay = $("<div>");
	//add random number 
	randomDisplay.text(random);
	//add style 
		randomDisplay.addClass("displayRandom");
			//display in division maroon text
			$("#randomNumber").append(randomDisplay);

//user click a gem to get respective numbers
	$("#gem1").on("click", function() {
	//total add blue number
	tempSum += blue1;
	//print to test
	console.log(tempSum);
	//call function checkSum to check sum
	checkSum();
	});
		$("#gem2").on("click", function() {
		tempSum += red1;
		console.log(tempSum);
		checkSum();
		});
			$("#gem3").on("click", function() {
			tempSum += green1;
			console.log(tempSum);
			checkSum();
			});
				$("#gem4").on("click", function() {
				tempSum += purple1;
				console.log(tempSum);
				checkSum();
				});

//display scores
var h4score = $("<h4>");
var h4win = $("<h4>");
var h4lose = $("<h4>");
var score = $("<span>");
var win = $("<span>");
var loss = $("<span>");
$("#h4score").append(score);
$("#h4win").append(win);
$("#h4lose").append(loss);

//check if guess total match random
function checkSum(){
	if (tempSum < random){
		score.html(tempSum);
			} else if (tempSum === random){
			winNum++;
			score.html(tempSum);
			win.html(winNum);
			reset();
			} else if (tempSum > random){
				lossNum++;
				score.html(tempSum);
				loss.html(lossNum);
				reset();
				}
	}

//reset game
function reset(){
	random = Math.floor((Math.random() * 120) + 19);
	blue1 = Math.floor((Math.random() * 12) + 1); 
	red1 = Math.floor((Math.random() * 12) + 1); 
	green1 = Math.floor((Math.random() * 12) + 1); 
	purple1 = Math.floor((Math.random() * 12) + 1);
	randomDisplay.text(random);
	tempSum = 0;
	score.text(tempSum);
}
});