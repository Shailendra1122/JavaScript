const todolist = [];

function addtodo(){
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;

    todolist.push(name);

    console.log(todolist);

    inputElement.value='';

}