var answers = [];
answers[0] = 'Ada Lovelace';
answers[1] = 'Alan Turing';
answers[2] = 'Vim';
answersLength = answers.length - 1;

function randomAnswer(){
    
    console.log(Math.round(Math.random() * answersLength));
}