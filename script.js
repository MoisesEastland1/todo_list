//grabbed the form by id frm HTML
const form = document.getElementById('form');
//grabbed the input by id frm HTML
const input = document.getElementById('input');
//grabbed the unorder-list(todo-list) by id frm HTML
const todoList = document.getElementById('todo-list');




//this the Todo Array initialized where input values will go
let allTodosArr = [];

//this the Event Listener for submitting input values
form.addEventListener('submit', (e) => {
  //this preventing the default activity like page reload
  e.preventDefault();

  //This the add todo function at play
  addTodo()
  
  
})

//this the inner workings of the "add" todo input to array function
function addTodo() {
  // the input value is known as todoInputText w/ trimmed whitespace via trim method
  const todoInputText = input.value.trim();

  // preventing empty todos values frm being created 
  if(todoInputText.length > 0) {

    //pushing input value into the todo array
  allTodosArr.push(todoInputText);
  
  //calling the "update" function to update array w/ todo and index position
  updateTodoList()

  //calling the "save" function to  save todos to local storage
  saveTodos();

  //identifing and empty todo values
  todoInputText.value = "";
  }
  //console logging the todo array to view in local storage(will be deleting soon)
  console.log(allTodosArr);
  }

  function updateTodoList() {
    //clear todoList (unoredered list) w/ empty string
    todoList.innerHTML = "";
    //Looping through array for todos and their index position
    allTodosArr.forEach((todo, todoIndex)=> {

      //creating todoEntry w/ "create" function and assigning todo a index
      todoEntry = createTodoEntry(todo, todoIndex);

      //writting todoEntry (list item) value in the todoList (unordered list)
    todoList.append(todoEntry);
    })
  }

  //this is the inner working of the "create" function
  function createTodoEntry(todo, todoIndex) {
    //intialize todoEntry w/ createElement method now list item is known as todoEntry
    const todoEntry = document.createElement('li');

    //initializing todoID to todoEntry for todo's Index
    const todoID = "todo-"+todoIndex;
    //rendering todoEntry w/ todo (input.value)
    /*todoEntry.innerText = todo;*/

    todoEntry.className = "todo";
    //Injecting the CSS rules for the todoEntry and adding ID values to the todo index
    todoEntry.innerHTML = `
    
    <li class="todo-entry ">
        <input type="checkbox" id="${todoID}">
        <label class="custom-check" for="${todoID}">

          <i class="fa-solid fa-circle-check"></i>
        </label>
        <label for="${todoID}" class="todo-text">
          ${todo}
        </label>
        <button class="d-btn" id="d-btn">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </li>

    `
    
    //returning todoEntry (list item) to update 
    return todoEntry;
  }
  //This is the inner workings of the "save" function
  function saveTodos() {

    //initalizing the JSON stringify method to stringify the todos arrays in todosJSON
    const todosJson = JSON.stringify(allTodosArr);

    //Using setItem  to save todos to local storage
    localStorage.setItem("todos", todosJson);
  }

  
