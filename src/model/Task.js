

export default class{
    constructor(title,description,completed){
        this.title = title
        this.description = description
        this.completed = completed
    }

    getTitle(){ return this.title }
    setTitle( title ){ this.title = title }

    getDescription(){ return this.description }
    setDescription( description ){ this.description = description }

    getCompleted(){ return this.completed }
    setCompleted( completed ){ this.completed = completed }
}