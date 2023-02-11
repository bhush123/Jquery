// callback function - one function passes as an argument to the other function known as callback function.
// means a function inside another function. 

$(document).ready(function(){
    $('button').click(function(){
        alert('first element will be hidden');
        $('.demo:first-child').hide(3000 , function(){        //callback function.
            $('.demo').css({border:'5px solid black', background: 'yellow'});
        });
    });
});