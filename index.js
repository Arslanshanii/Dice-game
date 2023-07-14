var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Display the random number
//console.log(randomNumber);

var diceImage = document.getElementById('diceImage');

    // Set the source attribute of the image based on the random number
diceImage.src = './images/dice' + randomNumber + '.png';

var diceImage = document.getElementById('diceImage2');

    // Set the source attribute of the image based on the random number
diceImage.src = './images/dice' + randomNumber1 + '.png';

if (randomNumber>randomNumber1){
    var heading= document.querySelector('h1');
    heading.innerHTML='Player 1 won 🔥';
}


else if (randomNumber<randomNumber1){
    var heading1= document.querySelector('h1');
    heading1.innerHTML='Player 2 won 😍';
}

else if(randomNumber===randomNumber1){
    var heading2= document.querySelector('h1');
   
    heading2.innerHTML='Its a Tie 🫠 '
}

