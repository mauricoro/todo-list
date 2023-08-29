
export default class item{
    constructor(reference, title,  description, dueDate, priority){
     this.reference = reference
     this.title = title
     this.description = description
     this.dueDate = dueDate
     this.priority = priority

    }

    getTitle(){
        return this.title;
    }
    getDescription(){
        return this.description;
    }
    getDueDate(){
        return this.dueDate;
    }  
    getPriority(){
        return this.priority;
    }
    getReference(){
        return this.reference;
    }   

    setTitle(newTitle){
        this.title = newTitle;
    }
    setDescription(newDescription){
        this.description = newDescription;
    }
    setDueDate(newDueDate){
        this.dueDate = newDueDate;
    }  
    setPriority(newPriority){
        this.priority = newPriority;
    }    
    setReference(newReference){
        this.reference = newReference
    }
    
    
 }

