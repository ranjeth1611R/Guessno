var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");
var msg3 = document.querySelector("#msg3");
var result = Math.floor(Math.random()*10) - 1;
var no_of_guesses = 0;
var  guesses_num = [];
console.log(result);

function play() {
    var user_guess = document.querySelector("#guess").value;
    if(user_guess < 1 || user_guess > 10){
        alert("Enter Number Between 1 To 10")
    }
    else{
        guesses_num.push(user_guess);
        no_of_guesses = no_of_guesses + 1 ;

        if(user_guess < result){
            msg1.textContent = "Your Guess Is Low";
            msg2.textContent = "Number Of Guesses : " + no_of_guesses;
            msg3.textContent = "Guessed Numbers Are : " + guesses_num;
        }

        else if(user_guess > result){
            msg1.textContent = "Your Guess Is high";
            msg2.textContent = "Number Of Guesses : " + no_of_guesses;
            msg3.textContent = "Guessed Numbers Are : " + guesses_num;
        }

        else if(user_guess == result){
            msg1.textContent = "Your won";
            msg2.textContent = "The Number is : " + result;
            msg3.textContent = "You Guessed  : " + no_of_guesses + "guesses";
        }
    }
}