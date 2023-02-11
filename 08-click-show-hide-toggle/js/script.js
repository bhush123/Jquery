$(document).ready(function(){
    $('#btn-1').click(()=>{
      $('.demo').hide('slow');
    });

    $('#btn-2').click(()=>{
        $('.demo').show(2000);
    });

    $('#btn-3').click(()=>{
        $('.demo').toggle('fast');
    });
});