// initialize array to empty, uses this to store todos for sync
let todoArray = [];


//Initialize the board when the user opens it, should store the up to date list.
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
        //Update view, also send to sync
        todoArray.push(inputVal);
        chrome.storage.sync.set({'todo': todoArray},function(){});
        $("<li class='todos'>" + inputVal + "</li>").insertBefore('.addRow');
        $(this).val("");

    }
});



//Remove todo after double clicking
$("ul").on("dblclick","li.todos",function(event){
    //Remove from array.
    todoArray.splice(todoArray.indexOf($(this)),2);
    chrome.storage.sync.set({'todo': todoArray},function(){});
    //Fade out and remove from view
    $(this).fadeOut("slow");
    $(this).remove();
});


//Drag and sort
$(function(){
    $("ul").sortable({
        update:function(){
        todoArray = []
        //Reorder the array
        $("li").each(function(){
            if($(this).class != "addRow" && $(this).text()!=""){
                todoArray.push($(this).text());
            }
          });
        chrome.storage.sync.set({'todo': todoArray},function(){});
        }
    });
});

