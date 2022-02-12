const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)


function addTodo(event){
    event.preventDefault();
    console.log("HELLO")


    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    const userInput =  todoInput.value;

    if(userInput.length === 0){
        alert("Proszę o wpisanie treści");
    }else{
        console.log(userInput);
        newTodo.innerText = userInput;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
    
    
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        todoList.appendChild(todoDiv);
    
        //Append to list
    
        todoList.appendChild(todoDiv);
    
        //Clear input value
        todoInput.value = "";
    }
 

 

}

function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
            
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed'); 
    }
}


