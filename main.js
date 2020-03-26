// Fizz Buzz test:
//  Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.

// inizializzo la var i a 1 per poi generare i numeri fino a 100 con un ciclo while
var i = 1;
// quando i supera 100 il ciclo termina
while (i <= 100) {
// le condizioni degli if sono al resto della divisione di i
// con and le condizioni restituiscono true solo se entrambe sono rispettate
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    var contPrec = document.getElementById('my-id').innerHTML;
    document.getElementById('my-id').innerHTML = contPrec + "<li>" + "FizzBuzz" + "</li>";
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
    contPrec = document.getElementById('my-id').innerHTML;
    document.getElementById('my-id').innerHTML = contPrec + "<li>" + "Buzz" + "</li>";
  }
  else if(i % 3 == 0){
    console.log("Fizz");
    contPrec = document.getElementById('my-id').innerHTML;
    document.getElementById('my-id').innerHTML = contPrec + "<li>" + "Fizz" + "</li>";
  }else{
    console.log(i);
    contPrec = document.getElementById('my-id').innerHTML;
    document.getElementById('my-id').innerHTML = contPrec + "<li>" + i + "</li>";
  }
  // incremento legato alle condizioni di uscita dal ciclo
  i++;
}
// per stampare a schermo salvo in contPrec il contenuto delloutput poi concateno il nuovo elemento facendolo diventare un list item
