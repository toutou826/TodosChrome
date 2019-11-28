//Add todos when enter is pressed
$("input").keypress(function(event){
    if(event.which === 13 && $(this).val() != ""){
        console.log($(this).val());
    $("<li class='todos'><span class='circle'>O </span>" + $(this).val() + "</li>").insertBefore('.addRow');
    $(this).val("");
    }
});

//Strike text after double click
$("ul").on("dblclick","li.todos",function(){
    $(this).toggleClass("completed");
});

//Remove todo after clicking on circle
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut("slow");
    $(this).parent().remove();
});


//Drag and sort
$(function(){
    $( "ul" ).sortable();
});

