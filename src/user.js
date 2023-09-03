export default class user {
  constructor() {
    this.lists = []
  }

  addList(newList) {
    this.lists.push(newList)
  }

  getLists() {
    return this.lists
  }
}
