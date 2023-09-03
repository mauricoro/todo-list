import list from "./list"
import item from "./item"

//  should add feature to allow to insert items by entering and item should go after item that enter pressed on
export function createMenuDom(user) {
  const addButton = document.querySelector("#add")
  addButton.addEventListener("click", () => {
    showList(initializeList(user))
  })
}
const test = "test"
function showList(listReference) {
  const menu = document.querySelector(".menu")
  menu.classList.add("hidden")
  listReference.classList.remove("hidden")
  listReference.classList.add("shown")
}

export function initializeList(user) {
  const newList = new list(createListDom())
  const newItem = new item(createItemDom())
  newList.addItem(newItem)
  user.addList(newList)
  appendList(newList)
  appendItem(newList, newItem)
  itemListener(newList, newItem)

  const listReference = newList.getReference()
  listReference.classList.add("shown")
  const titleReference = addTitle(newList)
  newList.setTitleReference(titleReference)
  return newList.getReference()
}

function addTitle(newList) {
  let newTitle = document.createElement("button")
  newTitle.textContent = newList.getTitle()
  newTitle.addEventListener("click", () => {
    showList(newList.getReference())
  })
  document.querySelector(".titles").appendChild(newTitle)
  return newTitle
}

export function createItemDom() {
  //returns div.item input
  const newItem = document.createElement("div")
  newItem.classList.add("item")

  const newInput = Object.assign(document.createElement("input"), {
    type: "text",
    placeholder: "New Item",
  })
  newItem.appendChild(newInput)
  console.log(newItem)
  return newItem
}

export function createListDom() {
  const list = document.createElement("div")
  const titleContainer = document.createElement("div")
  const title = Object.assign(document.createElement("input"), {
    type: "text",
    value: "New Project",
    placeholder: "Project Title",
  })
  const backArrow = Object.assign(document.createElement("img"), {
    src: "img/back-arrow.svg",
    alt: "back-arrow",
  })
  const backArrowWrapper = document.createElement("button")
  const backArrowContainer = document.createElement("div")
  const items = document.createElement("div")

  backArrowContainer.classList.add("container")
  list.classList.add("list")
  titleContainer.classList.add("title")
  items.classList.add("items")

  backArrowWrapper.appendChild(backArrow)
  backArrowContainer.appendChild(backArrowWrapper)
  titleContainer.appendChild(backArrowContainer)
  titleContainer.appendChild(title)
  list.appendChild(titleContainer)
  list.appendChild(items)

  backArrowWrapper.addEventListener("click", () => {
    document.querySelector(".list.shown").className = "list hidden"
    document.querySelector(".menu.hidden").className = "menu"
  })

  return list
}

export function itemListener(list, item) {
  //update list title
  let listTitle = list.getReference().querySelector("div.title input")
  listTitle.addEventListener("change", () => {
    list.setTitle(listTitle.value)
  })

  let inputReference = item.getReference().querySelector("input")
  inputReference.addEventListener("change", () => {
    item.setTitle(inputReference.value)
  })

  inputReference.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && inputReference.value !== "") {
      console.log("create new item has fired")
      let newItem = createItem()
      list.addItem(newItem)
      list
        .getReference()
        .querySelector(".items")
        .appendChild(newItem.getReference())
      newItem.getReference().querySelector("input").focus()
      itemListener(list, newItem)
    }

    if (
      event.key === "Backspace" &&
      inputReference.value === "" &&
      list.getItems().length > 1
    ) {
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

function createItem() {
  return new item(createItemDom())
}

function appendItem(list, item) {
  list.getReference().querySelector(".items").appendChild(item.getReference())
}

function appendList(list) {
  document.querySelector("div.lists").appendChild(list.getReference())
}
