import user from "./user.js"
import { createMenuDom, initializeList } from "./dom.js"

const defaultUser = new user()

initializeList(defaultUser)
createMenuDom(defaultUser)
