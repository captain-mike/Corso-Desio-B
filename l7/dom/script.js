$(function(){

    $('#menu-toggle').click(function(){

        if(!$('#menu-off-canvas').hasClass('open')){

            $('#menu-off-canvas')
            .addClass('open')
            .animate({
                left:30
            }, 200)
            .animate({
                left:0
            },200)
        }else{
            closeMenu()
        }

    })

    $('#close-off-canvas-menu').on('click',closeMenu)


    function closeMenu(){
        $('#menu-off-canvas')
        .removeClass('open')
        .animate({
            left:-300
        }, 400)
    }


    $(document).on('scroll', function(){
        let top = $(window).scrollTop();
        
        $('.parallax').css('background-position', `0 ${439 + top * .4}px`)
    })
    
})