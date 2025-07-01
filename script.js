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

//this the inner workings of the add todo function
function addTodo() {
  // the input value is known as todoInputText w/ trimmed whitespace via trim method
  const todoInputText = input.value.trim();

  // preventing empty todos values frm being created 
  if(todoInputText.length > 0) {

    //pushing input value into the todo array
  allTodosArr.push(todoInputText);

  
  //identifing and empty todo values
  todoInputText.value = "";
  }
  
  console.log(allTodosArr);
  }
