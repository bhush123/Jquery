$(document).ready(()=>{
    $('.demo').mouseenter(function(){
        $(this).animate({width :'400px', height: '500px'});
    });

    $('.demo').mouseleave(function(){
        $(this).animate({width : '250px', height: '250px'});
    });

    $('[type="button"]').dblclick(()=>{
        $('.demo').css('background-color','green');
    });
});