// append(): append() method is used to add some content or text inside html tag of ending. 
// prepend(): prepend() method is used to add some content or text inside html tag of starting. 

$(document).ready(function(){
    $('#btn-1').click(function(){
        $('.demo').append('...I am append method content')
    })

    $('#btn-2').click(function(){
        $('.demo').prepend('I am prepend method content...')
    })
})









