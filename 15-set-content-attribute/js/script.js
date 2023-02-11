
$(document).ready(function(){
    $('#btn-1').click(function(){
        $('.demo-1').text('<h1>I am text() method</h1>');  //text() method is used to add new text content inside html element.but to be whiped up before all content.
    });

    $('#btn-2').click(function(){
        $('.demo-2').html('<h1>I am html() method</h1>');   //html() method is used to add html element inside html document from javaScript.
    });

    $('#btn-3').click(function(){
        $('input').val('Bhushan');      //val() or value method is used to add value inside input from javaScript.
    });

    
    $('#btn-4').click(function(){
        $('iframe').attr('scr','https://www.google.com/maps/@18.6270827,73.7830858,15z');   //attr() or attribute method is used to set attribute of html element from javaScript.
    });

});