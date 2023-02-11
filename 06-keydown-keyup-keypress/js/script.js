$(document).ready(()=>{
    $('[type="text"]').keydown(function(){
       $(this).css('border-bottom','5px solid red');
    });

    $('[type="text"]').keyup(function(){
       $(this).css('border','5px solid #000');
    });

    $('[type="text"]').keypress(function(){
        $(this).css({background:'#727272',color:'#fff'});
    });
});