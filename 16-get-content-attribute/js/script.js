$(document).ready(function(){
    $('#btn-1').click(function(){
       alert(`text: ${$('.demo-1').text()}`)      
    })

    $('#btn-2').click(function(){
        alert(`html: ${$('.demo-2').html()}`)
     })

     $('#btn-3').click(function(){
        alert(`value: ${$('input').val()}`)
     })

     $('#btn-4').click(function(){
        alert(`text:${$('img').attr('scr')}`)
     })

})