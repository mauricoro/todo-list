import user from './user.js'
import list from './list.js'
import item from './item.js'
import {createItemDom, createListDom, itemListener, appendItem, appendList} from './dom.js'


    const defaultUser = new user()
    let defaultList = new list(createListDom())
    let defaultItem = new item(createItemDom())
    defaultList.addItem(defaultItem)
    defaultUser.addList(defaultList)

    appendList(defaultList)
    appendItem(defaultList, defaultItem)
    itemListener(defaultItem,defaultList)













