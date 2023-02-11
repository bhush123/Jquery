$(document).ready(()=>{
    $('.demo').hover(function(){
        $(this).css({'background-color':'#fff','box-shadow': '0px 0px 20px rgba(0,0,0,0.6)'});
    })

    $('.demo').mouseleave((function(){
        $(this).css({'background':'#00ffff', 'box-shadow':'0px 0px 0px #fff'});
        //we can write either this keyword or demo here.
    }))
})