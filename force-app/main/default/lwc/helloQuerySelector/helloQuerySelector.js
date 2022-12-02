import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {
    fetchDetailHandler(){
        username=["Nikka ,Aman,Rahul ,Preeti"]

       const elem= this.template.querySelector('h1')
       elem.style.border="1 px solid red"; 
       const userElements =this.template.querySelector('.name')
       Array.from(userElements).forEach(item=>{
          console.log(elem.innerText)
          item.setattribute("title", item.innerText)
       })

    }
}