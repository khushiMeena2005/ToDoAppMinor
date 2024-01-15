let ToDoList=[
    { item:'buy milk',
    dueDate:'10/01/24'
    },
    {item:'go eat food',
    dueDate:'10/01/24'
   }
];
displayItems();

function addToDo(){

    let inputElement=document.querySelector('#addWork');
     let dateElement=document.querySelector('#addDate');

    let ToDoItem=inputElement.value;
    let toDoDate=dateElement.value;
    ToDoList.push({item:ToDoItem,dueDate:toDoDate});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems(){
    let ContainerElement=document.querySelector('.container'); 
    let newHtml='';

    for(let i=0;i < ToDoList.length;i++)
    {  let item=ToDoList[i].item;
        let dueDate=ToDoList[i].dueDate;
      newHtml +=`
      <span>${item}</span>
      <span>${dueDate}</span>
      <button   class="deleteBtn" onclick="ToDoList.splice(${i},1); displayItems();">Delete</button>
  `;
   }
  ContainerElement.innerHTML= newHtml;
}