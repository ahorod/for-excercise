$(document).ready(function(){

// Factorials
  $('#factorial').submit(function(event){
    var factorial = parseInt($('#input').val());
    var answer = 1;
    for(i=factorial; i>1; i--){
      answer *= i;
    }
    alert(answer);
    event.preventDefault();
  });








});
