class list{
   constructor(name){
    this.name = name
    this.items = []
   }
   
   getName(){
      return this.name
   }

   setName(newName){
      this.name = newName
   }

   addItems(item){
      this.items.push(item)
   }


}