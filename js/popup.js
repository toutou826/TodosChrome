//Add todos when enter is pressed
$("input").keypress(function(event){
    if(event.which === 13 && $(this).val() != ""){
        console.log($(this).val());
       $("<li class='todos'><span class='circle'>O </span>" + $(this).val() + "</li>").insertBefore('.addRow');
       $(this).val("");
    }
});

$("ul").on("dblclick","li.todos",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(300);
    $(this).parent().remove();
});