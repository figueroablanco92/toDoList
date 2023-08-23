
export default class User{
    constructor( name, pass){
        this.name = name
        this.pass = pass
    }

    getName(){ return this.name }
    setName( name ){ this.name = name }

    getPass(){ return this.pass }
    setPass( pass ){ return this.pass}

    toString(){ return `Objeto ${this.name}`}
}

