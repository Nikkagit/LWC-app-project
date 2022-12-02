import { LightningElement } from 'lwc';
import signin from './signin.html'
import signup from './signup.html'
import rendertemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {
    selectedBtn=''
    render(){ 
        return this.selectedBtn === 'signup' ? signupTemplate :
                this.selectedBtn === 'signin' ? signinTemplate:
                rendertemplate
    }

    handleClick(event){ 
        this.selectedBtn = event.target.label
    }
    submitHandler(event){ 
        console.log(`${event.target.label} Successfully!!`)
    }
}