
$(document).ready(function(){
    $('.btn-1').on('click', function(){
        $('.demo').fadeOut('slow');  //also we can give speed or time delay in milisecond.
    })                             //slow or fast or 2000 or 1000 etc.

    $('.btn-2').click(()=>{
        $('.demo').fadeIn('fast')                  //(speed ,callback function)
    })

    $('.btn-3').click(()=>{
        $('.demo').fadeToggle(1000);   //fadeToggle() it is a combination of fadeOut and fadeIn event.
    })

    $('.btn-4').click(()=>{
        $('.demo').fadeTo(1000, 0.6)  //0.6 is a opacity and 1000 is a speed.
    })

    $('.btn-5').click(()=>{
        $('.demo').slideUp(1000);
    })

    $('.btn-6').click(()=>{
        $('.demo').slideDown('slow');
    })

    $('.btn-7').click(()=>{
        $('.demo').slideToggle('fast');
    })
})