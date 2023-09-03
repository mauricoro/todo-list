import item from "./item.js"
export default class list {
  constructor(reference, title = "Project", titleReference) {
    this.title = title
    this.reference = reference
    this.titleReference = titleReference
    this.items = []
  }

  getTitle() {
    return this.title
  }

  getItems() {
    return this.items
  }

  getReference() {
    return this.reference
  }

  setTitle(newTitle) {
    this.title = newTitle
    this.titleReference.textContent = newTitle
  }

  setTitleReference(newReference) {
    this.titleReference = newReference
  }

  addItem(newItem) {
    this.items.push(newItem)
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}
