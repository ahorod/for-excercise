$(document).ready(function(){

// Factorials
  // $('#factorial').submit(function(event){
  //   var factorial = parseInt($('#input').val());
  //   var answer = 1;
  //   for(i=factorial; i>1; i--){
  //     answer *= i;
  //   }
  //   alert(answer);
  //   event.preventDefault();
  // });


// Palindromes

  $('#palindromeForm').submit(function(event){
    var sentence = $('#palindromeInput').val().split(' ').join('').toLowerCase();
    var split = [];

    if(sentence.length%2===1){
      split = sentence.split("");
      split.splice(sentence.length/2,1);
      console.log('odd', split);
    }
    else {
      split = sentence.split("");
        console.log('even');
    }

    var half = split.slice(split.length/2).reverse();

    var isPalindrome = true;
    for(i=0;i<half.length;i++){
      if(half[i]!==sentence[i]){
        isPalindrome = false;
        break;
      }
    }
    if(isPalindrome === true){
      alert("It's a palindrome.");
    }
    else{
      alert('Nope');
    }
    event.preventDefault();
  });
});
