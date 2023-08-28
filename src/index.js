//any imports
import user from './user.js'
import list from './list.js'
import item from './item.js'
//any globals

//don't need to load main page

//event listener to add todo item from dom js
//listen()
//on init create list object with to-do as the title and a object
let newList = new list("To-Do")
let newItem = new item("Test1")
let newUser = new user()
newList.addItem(newItem)
newUser.addList(newList)

//item has to listen for whenever its updated to change its description
//if new item is empty and then deleted then 
let currentItem = document.querySelector(".item input")
newItem.setReference(currentItem);
console.log(newItem.getTitle())



