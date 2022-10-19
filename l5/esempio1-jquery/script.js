$(document).ready(function() {

    /*
    $('.blocco').on('click', function(){
        $(this).css('background-color','red');
    })
    */

    $('.blocco').on('click', function(){
        $(this).toggleClass('active');
    })

})