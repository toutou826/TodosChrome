// chrome.storage.sync.get("todo", function (retVal) {
//     console.log(retVal.value);
// });
let todoArray = [];


chrome.storage.sync.get('todo',function(keys){
    if(keys.todo != null){
        todoArray = keys.todo;
        for(let i = 0; i < todoArray.length; i ++){
            $("<li class='todos'>" + todoArray[i] + "</li>").insertBefore('.addRow');
        }
    }
});


//Add todos when enter is pressed
$("input").keypress(function(event){
    let inputVal = $(this).val();
    if(event.which === 13 && inputVal != ""){
        todoArray.push(inputVal);
        chrome.storage.sync.set({'todo': todoArray},function(){});
        $("<li class='todos'>" + inputVal + "</li>").insertBefore('.addRow');
        $(this).val("");

    }
});



//Remove todo after double clicking
$("ul").on("dblclick","li.todos",function(event){
    todoArray.splice(todoArray.indexOf($(this)),1);
    chrome.storage.sync.set({'todo': todoArray},function(){});
    $(this).fadeOut("slow");
    $(this).remove();
});


//Drag and sort
$(function(){
    $( "ul" ).sortable();
});

