// Fizz Buzz test:
//  Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.

// stesso esercizio svolto usando un ciclo for

// quando i supera 100 il ciclo termina
for (var i = 1; i <= 100; i++) {
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

}
// per stampare a schermo salvo in contPrec il contenuto delloutput poi concateno il nuovo elemento facendolo diventare un list item
