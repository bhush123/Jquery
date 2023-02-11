// after() method is used to add new html element after any existing html element.
// before() method is used to add new html element before any existing html element.

$(document).ready(function(){
    $('#btn-1').click(function(){
        $('.demo').after('<strong>I am after method</strong>')
    })

    $('#btn-2').click(function(){
        $('.demo').before('<strong>I am before method</strong>')
    })
})