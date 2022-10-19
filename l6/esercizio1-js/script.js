
let salva = document.querySelector('#salva');

salva.addEventListener('click',function(){

    let testoInput = document.querySelector('#testo');

    //Step 1 :creo tutti i tags
    //qui sotto è come fare $('<div></div>') in jquery
    let divGenitore = document.createElement('div');//<div></div> 
    let span = document.createElement('span');//<span></span>
    let button = document.createElement('button');//<button></button>

    //Step 2: aggiungo classi e stili
    divGenitore.classList.add('alert','alert-warning');//<div class="alert alert-warning"></div> 
    button.classList.add('btn','btn-danger','completaTodo');//<button class="btn btn-danger completaTodo"></button>

    divGenitore.style.boxShadow = '1px 1px 3px #000';

    //Step 3: gestisco gli eventi
    button.addEventListener('click',function(){
        button.textContent = 'Completato';
        button.classList.remove('btn-danger');
        button.classList.add('btn-success');
        divGenitore.classList.remove('alert-warning');
        divGenitore.classList.add('alert-success');
        document.querySelector('#completati').append(divGenitore);
    })

    //Step 4: scrivo i testi
    span.textContent = testoInput.value + ' '
    button.textContent = 'Completa'

    //ultimo Step
    divGenitore.append(span, button)
    document.querySelector('#target').append(divGenitore);

})