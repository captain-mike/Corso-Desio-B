fetch('city.json').then(res => res.json())
.then(city => {

    city.forEach(c => {
        let select = document.querySelector('#city')
        
        let option =  document.createElement('option')
        option.textContent = c.name
        option.value = c.id
        
        select.append(option)
    })
})


let myFormButton = document.querySelector('#myForm button')

myFormButton.addEventListener('click',function(e){
    e.preventDefault()//blocco l'invio del form
 
    let campi = Array.from(document.querySelectorAll('.notEmpty'));
    let [nome,cognome,email,password,confermaPassword] = campi
    let valid =  true

    //console.log(nome.id,nome.checkValidity(), nome.validity, nome.validationMessage)
    /*if(cognome.validity.tooShort){
        console.log('Parola troppo corta')
    }*/

    valid = campi.every(c => c.checkValidity())

    
    let successMessage = document.querySelector('#conferma')
    if(valid){
        successMessage.classList.remove('d-none')
    }else{
        successMessage.classList.add('d-none')

        let campiNonValidati = campi.filter(c => !c.checkValidity())
        let messaggiErrore = campiNonValidati.map(c => {
            return `<div class="alert alert-danger">${c.placeholder}: ${c.validationMessage}</div>`;
        })

        //comincio ad avvisare l'utente degli errori
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: messaggiErrore.join('')
        })

    }

})

let nome = document.querySelector('#nome')

nome.addEventListener('keyup',function(e){

    console.log(nome.checkValidity())

    if(e.key == 'Enter'){
        console.log('hai premuto invio')
    }

})
