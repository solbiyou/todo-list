'use strict'
// const todoItemEls = document.querySelectorAll('.todo__item');
const todoInputEl = document.querySelector('.todo__input');
const todoListEl = document.querySelector('.todo__list');


const addListItem = () => {
  todoInputEl.addEventListener('keypress', function(event) {
    //ascii code of Enter key
    if(event.keyCode === 13) {
      let newListItem = creatListItem(todoInputEl.value);
      // todoListEl.appendChild(newListItem);
      todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
      todoInputEl.value = "";

    } 
  })
}

const deleteItem = () => {
  todoListEl.addEventListener('dblclick', (event)=> {
    if(event.target.classList.contains('todo__item')) {
      todoListEl.removeChild(event.target);
    }
  })
}
//doesn't work due to bubbling and propagation
// const toggleList = () => {

//   for (let lst of todoItemEls) {
//     lst.addEventListener('click', ()=> {
//       lst.classList.toggle('done');
//     })
//   }
// }

const toggleDone = () => {
  todoListEl.addEventListener('click', (event)=>{
    if(event.target.classList.contains("todo__item")) {
      event.target.classList.toggle("done");
    } 
  })
}

const creatListItem = (text) => {
  // this is how new element is created
  const newListElement = document.createElement('li');
  // returns <li></li>

  //or innerHTML
  newListElement.textContent = text; 

  newListElement.setAttribute("class", "todo__item");
  return newListElement;
}



addListItem();
toggleDone();
deleteItem();
// toggleList();