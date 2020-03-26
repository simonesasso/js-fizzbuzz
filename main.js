// Fizz Buzz test:
//  Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.
var i = 1;
while (i <= 100) {

  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    var contPrec = document.getElementById('my-id').innerHTML;
    document.getElementById('my-id').innerHTML = contPrec + "<li>" + "FizzBuzz" + "</li>";
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
    var contPrec = document.getElementById('my-id').innerHTML;
    document.getElementById('my-id').innerHTML = contPrec + "<li>" + "Buzz" + "</li>";
  }
  else if(i % 3 == 0){
    console.log("Fizz");
    var contPrec = document.getElementById('my-id').innerHTML;
    document.getElementById('my-id').innerHTML = contPrec + "<li>" + "Fizz" + "</li>";
  }else{
    console.log(i);
    var contPrec = document.getElementById('my-id').innerHTML;
    document.getElementById('my-id').innerHTML = contPrec + "<li>" + i + "</li>";
  }
  i++;
}
