$(document).ready(function(){

   /* $('#salva').on('click', function(){

        let testo = $('#testo').val();

        let div = $('<div></div>');//creo un div per ospitare il load

        //la struttura è la seguente:
        //div > div.alert.alert-warning > span.todo-text + button.btn.btn-danger

        div.load('templates.html #todos > div',function(){
            console.log(div.children())
            
            div//parto dal div genitore
            .children()//array di figli, ma in questo caso contiene un solo figlio
            //.children()//a questo punto i children sono span e button
            //.first()//seleziono il primo in ordine di apparizione(span)
            .children('.todo-text')//vado a colpo sicuro selezionando l'elemento in questione
            .text(testo)
            .siblings('button.btn')//sposto il soggetto, ora parliamo del bottone
            .on('click', function(){
                $(this)
                .text('Completato')
                .removeClass('btn-danger')
                .addClass('btn-success')
                .parent()//cambio soggetto, ora si parla del genitore
                .removeClass('alert-warning').addClass('alert-success')
                .parent()//cambio soggetto, ora si parla del genitore del genitore
                .removeClass('alert-warning')
                .addClass('alert-success')
                .appendTo('#completati')
            })


        })

        
        div.appendTo('#target')

        $('#testo').val('')

    })*/


    $('#salva').on('click', function(){

        let testo = $('#testo').val();

        let div = $('<div></div>');//creo un div per ospitare il load

        //la struttura è la seguente:
        //div > div.alert.alert-warning > span.todo-text + button.btn.btn-danger

        div.load('templates.html #todos > div', function(){
            
            div//parto dal div genitore
            .find('.todo-text')//vado a colpo sicuro cercando l'elemento in questione
            .text(testo)
            .siblings('button.btn')//sposto il soggetto, ora parliamo del bottone
            .on('click', function(){
                $(this)
                .text('Completato')
                .removeClass('btn-danger').addClass('btn-success')
                .parent()//cambio soggetto, ora si parla del genitore
                .removeClass('alert-warning').addClass('alert-success')
                .parent()//cambio soggetto, ora si parla del genitore del genitore
                .removeClass('alert-warning')
                .addClass('alert-success')
                .appendTo('#completati')
            })


        })

        
        div.appendTo('#target')

        $('#testo').val('')

    })
    


})