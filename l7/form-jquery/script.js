//eventuale necessità di caricare valori per costruire il form
//let city = ['Milano','Roma','Verona','Napoli']
/*city.forEach(c => {
    let select = document.querySelector('#city')
    
    let option =  document.createElement('option')
    option.textContent = c
    option.value = c.toLowerCase()
    
    select.append(option)
})*/

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

function validateNotEmpty(jQueryArray){
    let valid = true;
    jQueryArray.each((_,el) =>{

        if($(`#error-for-${el.id}`).length == 0){
            $(el).after(`<span class="text-danger" id="error-for-${el.id}"></span>`)
        }

        if(!$(el).val()){//se non è stato riempito
            valid = false
            $(el).css('border','1px solid red')
            $(el).siblings('span').text(`compila il campo ${el.placeholder}`)
        }else{
            $(el).css('border','')
            $(el).siblings('span').text(``)
        }
    })
    return valid
}


//validazione
$(function(){//è come fare $(document).ready()
    
    $('#myForm button').on('click',function(e) {
        e.preventDefault();

        let campi = $('#myForm .notEmpty')
        let [,,,password,confermaPassword] = Array.from(campi)
        
        let valid = true

        valid = validateNotEmpty(campi)
        //array.forEach((el, i) => console.log(el))

        if(password.value != confermaPassword.value){
            valid = false
            $(password).css('border','1px solid red')
            $(confermaPassword).css('border','1px solid red')
        }else{
            $(password).css('border','')
            $(confermaPassword).css('border','')
        }

        if(valid){
            //document.querySelector('#myForm').submit()
            console.log('Form inviato')
            document.querySelector('#myForm').reset()
            $('#conferma').removeClass('d-none')

        }else{
            $('#conferma').addClass('d-none')
            //document.querySelector('#conferma').classList.add('d-none')
        }

        
    })

})

