//grabbed the form by id frm HTML
const form = document.getElementById('form');
//grabbed the input by id frm HTML
const input = document.getElementById('input');
//grabbed the unorder-list(todo-list) by id frm HTML
const todoList = document.getElementById('todo-list');


//const todos = JSON.parse(localStorage.getItem('todos'))

//this the Todo Array initialized where input values will go
let allTodosArr = [];

//this the Event Listener for submitting input values
form.addEventListener('submit', (e) => {
  //this preventing the default activity like page reload
  e.preventDefault();

  //This the add todo function at play
  addTodo()
  
  
})

//this the inner workings of the add todo input to array function
function addTodo() {
  // the input value is known as todoInputText w/ trimmed whitespace via trim method
  const todoInputText = input.value.trim();

  // preventing empty todos values frm being created 
  if(todoInputText.length > 0) {

    //pushing input value into the todo array
  allTodosArr.push(todoInputText);
  
  //this the create todo function at play
  createTodoEntry(todoInputText);

  //identifing and empty todo values
  todoInputText.value = "";
  }
  
  console.log(allTodosArr);
  }

  //this the inner working of the "create" function
  function createTodoEntry(todo) {
    //intialize todoEntry w/ createElement method now list item is known as todoEntry
    const todoEntry = document.createElement('li');

    //rendering todoEntry w/ todo (input.value)
    todoEntry.innerText = todo;
    //writting todoEntry value in the todoList (unordered list)
    todoList.append(todoEntry);
  }
