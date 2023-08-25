export class list{
   constructor(name){
    this.name = name
    this.items = []
   }
   
   getName(){
      return this.name
   }

   getItems(){
      return this.items;
   }

   setName(newName){
      this.name = newName
   }

   addItem(item){
      this.items.push(item)
      //update Dom
   }

   removeItem(item){
      this.items = items.splice(array.indexOf(item), 1);
   }

}
