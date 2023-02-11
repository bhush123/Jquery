$(document).ready(function(){
    $('.btn-1').click(function(){
        $('h1').addClass('red');        //addClass() method is used to add class to html element from javaScript.
    })

    $('.btn-2').click(function(){
        $('h2').removeClass();        //removeClass() method is used to remove class from html element.
    })

    $('.btn-3').click(function(){
        $('h3').toggleClass('green');   //toggleClass() method is a combination of addClass() method and removeClass() method means if class is not present then class will be add and if class is present then class will be remove.
    })

    $('.btn-4').click(function(){
        $('h4').css('background', 'yellow');  //css() method  is used to apply css properties from javaScript.
    })

    $('.btn-5').click(function(){            //hasClass() method is used to check whether class is present or not to an html element. It returns boolean value if class is present then returns true value and if class is not present then returns false value.
        
        if($('p').hasClass('bhushan') == true){
              $('p').css('background','red')
        }
        else{
            alert('class is not present here')
        }
        
    })
 
})