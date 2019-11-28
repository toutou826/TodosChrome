//Add todos when enter is pressed
$("input").keypress(function(event){
    if(event.which === 13 && $(this).val() != ""){
        console.log($(this).val());
    $("<li class='todos'>" + $(this).val() + "</li>").insertBefore('.addRow');
    $(this).val("");
    }
});

//Strike text after click
$("ul").on("click","li.todos",function(){
    $(this).toggleClass("completed");
});



//Remove todo after clicking on circle
$("ul").on("dblclick","li.todos",function(event){
    $(this).fadeOut("slow");
    $(this).remove();
});


//Drag and sort
$(function(){
    $( "ul" ).sortable();
});

