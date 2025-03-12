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
  for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i},1,);
        renderList();
      " class="delete-todo-button">Delete</button>
    `;
    todolistHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}
renderList()