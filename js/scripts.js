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
//   $('#palindromeForm').submit(function(event){
//     var sentence = $('#palindromeInput').val().split(' ').join('').toLowerCase();
//     var split = [];
//
//     if(sentence.length%2===1){
//       split = sentence.split("");
//       split.splice(sentence.length/2,1);
//       console.log('odd', split);
//     }
//     else {
//       split = sentence.split("");
//         console.log('even');
//     }
//
//     var half = split.slice(split.length/2).reverse();
//
//     var isPalindrome = true;
//     for(i=0;i<half.length;i++){
//       if(half[i]!==sentence[i]){
//         isPalindrome = false;
//         break;
//       }
//     }
//     if(isPalindrome === true){
//       alert("It's a palindrome.");
//     }
//     else{
//       alert('Nope');
//     }
//     event.preventDefault();
//   });


//Prime Sifting
var number = 100;
var numberList = [];

for(i=2;i<=number;i++){
  numberList.push(i);
}

for(j=2;j<=number;j++){
  for(k=0;k<=numberList.length;k++){
    if(numberList[k]%j===0 && numberList[k]!=j){
      numberList.splice(k,1);
    }
  }
}
console.log(numberList);

});
