/*record the input from user */
/*store input from user */
/*underline input from user */
/*delete under from user with a button */
const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElememtById('todos');

const todos = JSON.parse(localStorage.getItem('todos'))