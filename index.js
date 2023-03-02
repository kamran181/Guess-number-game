let Number = Math.trunc(Math.random() * 20 +1);
let score = 20;
let guess;
let HighScore = 0;

//when check button clicks
document.querySelector(".check").addEventListener("click", function (){
guess = +document.querySelector('.guess').value;
	if(!guess){
		document.querySelector('.message').textContent = "🚫 No Number selected";
	}else {
		if(guess === Number){
		  document.querySelector('.message').textContent = "🎉 Congrates you have won";
		  document.querySelector('body').style.backgroundColor = '#60b347';
		  document.querySelector('.number').style.width = '30rem';
		  if(score > HighScore){
		  	HighScore = score;
		  	document.querySelector('.highscore').textContent = score;
		  }
		}else if(guess !== Number){
			if(score > 0 ){
				displayMessage();	
			}else{
                document.querySelector('.message').textContent = "you have lost the game";
			}

		}
	}
})

// function to display messages and score
var displayMessage = function(){
	document.querySelector('.message').textContent = (guess > Number ? "Number is too High 📈" : "Number is too low 📉"); 
	score--;
	document.querySelector('.score').textContent = score;
}

//when again button gets clicked
document.querySelector('.again').addEventListener('click', function (){
	Number = Math.trunc(Math.random() * 20 +1);
	score = 20;
	document.querySelector('.message').textContent = "Start guessing...";
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.number').textContent = '?';
	document.querySelector(".guess").value = '';
	document.querySelector('.score').textContent = score;
})


