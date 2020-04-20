// DESCRIZIONE:
// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato


$(document).ready(function(){

  // ad ogni click, grazie al metodo one non si può ricliccare sullo stesso square
  $(".square").one("click", function(){
    // creo variabile cosi il this non si riferisce ad ajax, ma a quel quadrato
    var self = $(this);

    // chiamata ajax
    $.ajax({
      url : "https://flynn.boolean.careers/exercises/api/random/int",
      method : "GET",
      // se va tutto bene
      success : function (data, stato){
        console.log(data.response, data.success);

        // se dalla chiamata il numero che ritorna è <= 5 ...
        if (data.response <= 5){
          self.addClass("yellow");
          //altrimenti
        }else {
          self.addClass("green");
        }
        // in ogni caso aggiungo il numero uscito
        self.text(data.response);
      },
      // se ci sono errori
      error : function (richiesta, stato, errori){
        console.log("E' avvenuto un errore. " + errori, "stato " + stato, richiesta);
      }
    });
  });
})
