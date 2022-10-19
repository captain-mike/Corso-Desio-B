function colora(HTMLElement){
    if(HTMLElement.style.backgroundColor == ''){
        HTMLElement.style.backgroundColor = 'red';
    }else{
        HTMLElement.style.backgroundColor = '';
    }
}

let blocchi = document.querySelectorAll('#nuovo .blocco');
/*
blocchi.forEach(blocco => {
    blocco.addEventListener('click',() => {
        colora(blocco)
    })
})
*/



blocchi.forEach(blocco => {
    blocco.addEventListener('click',() => {
        blocco.classList.toggle('active')
    })
})