import list from './list.js'
import item from './item.js'

export function createItemDom(){
    //returns div.item input 
    let newItemDom = document.createElement('div')
    newItemDom.classList.add('item')
    let newInputDom = Object.assign(document.createElement('input'), { type: 'text', placeholder: "Type here"});
    newItemDom.appendChild(newInputDom)
    return newItemDom
}

export function createListDom(){
    //list div
    let list= document.createElement('div')
    list.classList.add('list')
    let title = document.createElement('div')
    title.classList.add('title')
    let titleInput = Object.assign(document.createElement('input'), { type: 'text', value: "To-Do"});
    let items = document.createElement('div')
    items.classList.add('items')

    title.appendChild(titleInput)
    list.appendChild(title)
    list.appendChild(items)
    return list
}   

export function itemListener(item, list){
    let itemReference = item.getReference().querySelector("input")
    console.log(itemReference)
      itemReference.addEventListener('change', () => {
         item.setTitle(itemReference.value)
         console.log("Title has been updated")
         console.log(item.getTitle())
         console.log(list.getItems())
      })

     itemReference.addEventListener('keydown', function(event) {
         if(event.key === "Enter"){
             let newItem = createItem()
             list.addItem(newItem)
             list.getReference().querySelector(".items").appendChild(newItem.getReference())
             newItem.getReference().querySelector("input").focus()

             itemListener(newItem,list)
             console.log("New Item has been added")

         }
      })
}

function createItem(){
    return new item(createItemDom())
}


