import { LightningElement } from 'lwc';

export default class Lifecyclehooks extends LightningElement {
    constructor(){
        super()
        console.log("parents constructors calless")

    }
}