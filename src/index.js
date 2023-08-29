import user from './user.js'
import list from './list.js'
import item from './item.js'
import {createItemDom, createListDom, itemListener} from './dom.js'

    const thisUser = new user()
    let newList = new list("To-Do", createListDom())
    let newItemDom = createItemDom()
    let newItem = new item(newItemDom)

    newList.getReference().querySelector(".items").appendChild(newItemDom)
    newList.addItem(newItem)
    itemListener(newItem,newList)
    document.querySelector("div.lists").appendChild(newList.getReference())













