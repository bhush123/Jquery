// empty() method is used to remove child elements from parent element.
// remove() method is used to remove child elements as well as parent element.


$(document).ready(function(){
    $('.btn-1').click(function(){
        $('.demo').empty();
    });

    $('.btn-2').click(function(){
        $('.demo').remove();
    });
})