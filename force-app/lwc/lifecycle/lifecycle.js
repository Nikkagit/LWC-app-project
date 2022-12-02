import { LightningElement } from 'lwc';

export default class Lifecycle extends LightningElement {
    constructor(){
        super()
        console.log("parents constructors calless")
        
}
connectedCallback(){
    console.log("parent connected callback")
}
renderedCallback(){
    console.log("parent renderd callback")

}
}