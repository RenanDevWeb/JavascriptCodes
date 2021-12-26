// Write a script that creates an array with 10000 random words between 3 and 5 characters, and returns the number of words that are palindromes in that array. Notes: The code needs to be in javascript You’ll need to return just the number of words You have 30 mins, if you run out of time, submit the form anyway. Once you click “Start” you cannot pause the countdown Don’t delete the main function
let stringRandom ;
const arrayStrings = [];
let palindromes = 0;
let notPalidromes = 0;


function StartChecker() { 
    function randomString(stringSize) {
        stringRandom = '';
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < stringSize; i++) {
          stringRandom += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
          
        }
        return stringRandom
    }
    
    function polulateArray(){
            for(let i = 1; i < 10001; i++){
                let randomNumber = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
                let world =  randomString(randomNumber)
                arrayStrings.push(world)
            }
    }
    
    function palindrome(str) {
        var removeChar = str.replace(/[^A-Za-z]/ig, "");
        var checkPalindrome = removeChar.split('').reverse().join('');
         return (removeChar === checkPalindrome);
      }
    
    polulateArray();
    
    arrayStrings.forEach(worldd => {
        if(palindrome(worldd) === true) {
            palindromes += 1;
        }else {
            notPalidromes += 1;
        }
    })
    
    console.log(`Total Palidromes ${palindromes}   Total Not Palidromes ${notPalidromes}`);

}

StartChecker()