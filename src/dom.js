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
    let list = document.createElement('div')
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

export function itemListener(list, item){

    //update list title
    let listName = list.getReference().querySelector("div.title input")
    console.log(listName)
    listName.addEventListener('change', () => {
        list.setName(listName.value)
        console.log("List title has been updated")
        console.log(list.getName())
    })

    let inputReference = item.getReference().querySelector("input")
    console.log(inputReference)
    inputReference.addEventListener('change', () => {
        item.setTitle(inputReference.value)
        console.log("Title has been updated")
        console.log(item.getTitle())
        console.log(list.getItems())
    })

    inputReference.addEventListener('keydown', function(event) {
        if(event.key === "Enter" && inputReference.value !== ""){
            console.log("create new item has fired")
            let newItem = createItem()
            list.addItem(newItem)
            list.getReference().querySelector(".items").appendChild(newItem.getReference())
            //Focus next item for typing convenience
            newItem.getReference().querySelector("input").focus()

            itemListener(list, newItem)
            console.log("New Item has been added")

        }

        if(event.key === "Backspace" && inputReference.value === "" && list.getItems().length > 1){
            console.log("Delete this item")
            item.getReference().remove()
            list.removeItem(item)
            //remove from list
            console.log(list.getItems())

            //Focus last item of array aka the previous item
            event.preventDefault()
            list.getItems().slice(-1)[0].getReference().querySelector("input").focus()



        }
    })

}
 

function createItem(){
    return new item(createItemDom())
}

export function appendItem(list, item){
    list.getReference().querySelector(".items").appendChild(item.getReference())

}

export function appendList(list){
    document.querySelector("div.lists").appendChild(list.getReference())
}


