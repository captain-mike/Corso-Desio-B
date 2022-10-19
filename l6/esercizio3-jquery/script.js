$(document).ready(function(){

    $('#salva').on('click', function(){

        let testo = $('#testo').val();

        let div = $('#todos > div').clone()//è come cloneNode(true) di vanillaJS

        div//parto dal genitore
        .find('.todo-text').text(testo)//cerco il tag span in cui scrivo
        .siblings('button')//qui seleziono il button fratello dello
        .on('click', function(){
            $(this)
            .text('completato')
            .removeClass('btn-danger').addClass('btn-success')
            .parent()
            .removeClass('alert-warning').addClass('alert-success')
            .appendTo('#completati')
        })
        .parent()//qui devo tornare al parent
        .appendTo('#target')//inserisco il parent(che contiene tutto il resto) nel dom

        $('#testo').val('')

    })
    


})