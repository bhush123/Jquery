
$(document).ready(() => {
  
    $('h1').css('background','red');   //using element or type selector or tagname selector.
    $('#good').css({'background':'red', 'font-size':'50px', 'font-weight': 'bolder', 'color': 'white'});  // using id selector //when we use multiple property of css then we have to write inside the object.
    $('.india').css('font-style','italic')  //using class selector
    $('[class]').css('text-decoration','underline') //using attribute name selector
    $('[class=india]').css('color','blue')   //using attribute name with value selector or attribute selector
    
})



