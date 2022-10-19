$(document).ready(function(){

    $('#salva').on('click', function(){

        let testo = $('#testo').val();

        let button = $('<button class="completaTodo btn btn-danger">Completa</button>')

        button.on('click', function(){
            button//prendo in causa il bottone generato
            .text('Completato')//scrivo al suo interno
            .removeClass('btn-danger')//rimuovo una sua classe
            .addClass('btn-success')//gli do una nuova classe
            .parent()//cambio soggetto, ora si parla del genitore
            .removeClass('alert-warning')//tolgo una classe al parent
            .addClass('alert-success')//gli do una nuova classe(sempre al parent)
            .appendTo('#completati')
        })

        $(`<div>${testo} </div>`)//creo un div
        .addClass('alert').addClass('alert-warning')//aggiungo delle classi
        .css('box-shadow','1px 1px 3px #000')
        .append(button)//aggiungo il bottone al suo interno
        .appendTo('#target')//scrivo il tag in un elemento html già presente nella pagina

        //$('#target').append(`<div>${testo}</div>`)
        $('#testo').val('')

    })


    /*
    posso intervenire sui bottoni dopo la loro creazione modificando l'uso di 
    .on() in questo modo
    $('#target').on('click','.completaTodo', function(){
        
        $(this)//prendo in causa il bottone cliccato
        .text('Completato')//scrivo al suo interno
        .removeClass('btn-danger')//rimuovo una sua classe
        .addClass('btn-success')//gli do una nuova classe
        .parent()//cambio soggetto, ora si parla del genitore
        .removeClass('alert-warning')//tolgo una classe al parent
        .addClass('alert-success')//gli do una nuova classe(sempre al parent)
        .appendTo('#completati')
        
    })
    */
    


})