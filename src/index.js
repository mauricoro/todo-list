import user from './user.js'
import list from './list.js'
import item from './item.js'
import {createItemDom, createListDom, itemListener, appendItem, appendList} from './dom.js'


const defaultUser = new user()
const defaultList = new list(createListDom())
const defaultItem = new item(createItemDom())
defaultList.addItem(defaultItem)
defaultUser.addList(defaultList)

appendList(defaultList)
appendItem(defaultList, defaultItem)
itemListener(defaultList,defaultItem)













