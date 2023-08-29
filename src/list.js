import item from './item.js'
export default class list{
   constructor(reference, name = "To-Do"){
    this.name = name
    this.reference = reference
    this.items = []
   }
   
   getName(){
      return this.name
   }

   getItems(){
      return this.items;
   }

   getReference(){
      return this.reference;
   }

   setName(newName){
      this.name = newName
   }



   addItem(newItem){
   //    let itemReference = newItem.getReference()
   //    let thisList = this;
   //    itemReference.addEventListener('change', () => {
   //       newItem.setTitle(itemReference.value)
   //    })

   //   itemReference.addEventListener('keydown', function(event) {
   //       if(event.key === "Enter"){
   //           console.log("create new item")
   //           let newItemDom = document.createElement('div')
   //           newItemDom.classList.add("item")
   //           let newInputDom = Object.assign(document.createElement('input'), { type: 'text', placeholder: 'Type here'});
   //           newItemDom.appendChild(newInputDom)

   //           let newItem = new item("test","test","test","test",newInputDom)
   //           console.log(this)
   //           thisList.addItem(newItem)

   //       }
   //    })

      this.items.push(newItem)
   }

   removeItem(item){
      this.items.splice(this.items.indexOf(item), 1);
   }

}
