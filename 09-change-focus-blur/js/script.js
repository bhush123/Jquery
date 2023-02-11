$(document).ready(()=>{
   
    $('[name="Password"]').change(()=>{
        alert('You have entered password');
    })

    $('[name="UserName"]').focus(function(){
        $(this).css('background','#808080');
    });

    $('[name="UserName"]').blur(function(){
        $('[name="UserName"]').css('background','#fff');
    });
});