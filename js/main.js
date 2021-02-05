function alertInput(){
    let text = document.querySelector('#todoInput');
};
function formAdd(form) {
    let textInput = document.querySelector('#todoInput');
    let todoDiv = document.querySelector('#todoDiv')
    if (!textInput.value == ''){
        todoDiv.innerHTML += '<div class="todoItem" onclick="todoDelElement(this)">' + textInput.value +'</div>';
        textInput.value = '';
    }
}
function todoDelElement(elem) {
    elem.remove();
}