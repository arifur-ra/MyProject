// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery =document.getElementById('grocery')

const submitBtn = document.querySelector('.submit-btn')
const groceryContainer = document.querySelector('.grocery-container')
const groceryList = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')



// edit option
 let editElement;
 let editFlag = false;
 let editID = '';

// ****** EVENT LISTENERS **********
// submit form adding list
form.addEventListener('submit', addList)
// clear list 
clearBtn.addEventListener('click', clearList)
// display items onload from local storage
window.addEventListener("DOMContentLoaded", setupItems);

// ****** FUNCTIONS **********

function addList(e){
     e.preventDefault()
     const groceryValue = grocery.value;
     const id = new Date().getTime().toString();

     // (groceryValue !== '' && editFlag === false) === (groceryValue !== '' && !editFlag)
     //(groceryValue !== '' && editFlag === true) === (groceryValue !== '' && editFlag)
    if (groceryValue !== '' && !editFlag) {
        const element = document.createElement('article')
        element.classList.add('grocery-item')
        
        // add id attribute
        let attr = document.createAttribute('data-id')
        attr.value =id;
        element.setAttributeNode(attr)
        element.innerHTML = `
                <p class="title">${groceryValue}</p>
                <div class="btn-container">
                    <button class="edit-btn" type="button">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-btn" type="button">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>` ;
    // delete and edit add listening
     const deleteBtn = element.querySelector('.delete-btn')
     const editBtn = element.querySelector('.edit-btn') 
     deleteBtn.addEventListener('click', deleteList)
     editBtn.addEventListener('click', editList)


     //append child
     groceryList.appendChild(element);
     displayAlert('item added to the list', 'success')
     // show container
     groceryContainer.classList.add('show-container')  
     
     // add to localStorage
      addToLocalStorage(id, groceryValue)

     // set back to default
     setBackToDefault()

    } else if (groceryValue !== '' && editFlag){

     // editing value added
        editElement.innerHTML = groceryValue;
        displayAlert('edit value added', 'success')
        // edit Local Storage
        editLocalStorage(editID,groceryValue)
        setBackToDefault()
        
    }else {
        displayAlert(' please enter the value', 'danger')
    }
}


 // display alert

 function displayAlert(text , action){
    alert.textContent= text;
    alert.classList.add(`alert-${action}`)

    // remove alert
     setTimeout(() => {
        alert.textContent= '';
        alert.classList.remove(`alert-${action}`)
     },3000);
 }
 // ...................clear List.............
 function clearList() {
     const items = document.querySelectorAll('.grocery-item')
     if(items.length > 0 ){
         items.forEach((item)=>{
             groceryList.removeChild(item)
         })
     }
     groceryContainer.classList.remove('show-container')
     displayAlert('empty list', 'danger')
     setBackToDefault()
    localStorage.removeItem('groceryList')
 }
 
 //........delete function...........
function deleteList(e) {
    const element =e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    groceryList.removeChild(element)

    if(groceryList.children.length === 0 ){
        groceryContainer.classList.remove('show-container')
    }
    displayAlert('item remove', 'danger')
    setBackToDefault()
    //.............remove from localStorage.........
    removeFromLocalStorage(id)
}
//...... edit function..............
function editList(e) {
    const element =e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
 // set form Value
    grocery.value =editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = 'edit';
}


 //....set back to default........
 function setBackToDefault() {
     grocery.value = ''
     editFlag = false;
     editID ='';
     submitBtn.textContent = 'submit'
 }
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, groceryValue) {
    const grocery ={id, groceryValue}
    // using ternary operator
    let items = getLocalStorage()
    console.log(items)
    items.push(grocery)

    localStorage.setItem('groceryList', JSON.stringify(items))
}

// remove item from localStorage
function removeFromLocalStorage(id) {

    let items = getLocalStorage()
    items=items.filter(function(item){
        if(item.id !== id){
            return item
        }
    })

    localStorage.setItem('groceryList', JSON.stringify(items))
    
}
function editLocalStorage(id, groceryValue) {
    let items = getLocalStorage()
    items = items.map(function(item){
        if(item.id === id){
            item.groceryValue = groceryValue;
        }
     return item
    })
    localStorage.setItem('groceryList', JSON.stringify(items))
     
}

const getLocalStorage =()=> {
    return localStorage.getItem('groceryList')? JSON.parse(localStorage.getItem('groceryList')):[]
}
// just a referent for local storage how its work

// localStorage.setItem('orange', JSON.stringify(['item1','item2']))
// const oranges =JSON.parse(localStorage.getItem('orange'))
// console.log(oranges)
// localStorage.removeItem('orange')
// ****** SETUP ITEMS **********

function setupItems() {
    let items = getLocalStorage();
  
    if (items.length > 0) {
      items.forEach(function (item) {
        createListItem(item.id, item.groceryValue);
      });
      groceryContainer.classList.add("show-container");
    }
  }
  
  function createListItem(id, groceryValue) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${groceryValue}</p>
              <div class="btn-container">
                <!-- edit btn -->
                <button type="button" class="edit-btn">
                  <i class="fas fa-edit"></i>
                </button>
                <!-- delete btn -->
                <button type="button" class="delete-btn">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            `;
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteList);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editList);
  
    // append child
    groceryList.appendChild(element);
  }
  
