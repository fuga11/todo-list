const todoList = [{
  name:'make dinner',
  dueDate:'2022-12-22'
},{
  name:'wash dishes',
  dueDate:'2022-12-22'
}];

function addtodo(){
  const inputEllement = document.querySelector('.js-name-input');
  const name = inputEllement.value;
  const dateInputEllement = document.querySelector('.js-date-input');
  const dueDate = dateInputEllement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });


  inputEllement.value = ''
}
renderList();
function renderList(){
  let todolistHTML = '';

  todoList.forEach(function(todoObject,index){
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index},1,);
        renderList();
      " class="delete-todo-button">Delete</button>
    `;
    todolistHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}
renderList()