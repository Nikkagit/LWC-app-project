import { LightningElement } from 'lwc';

export default class FirstLwc extends LightningElement {
fullname ="zero to hero"
changeHandler(event){
    this.title =event.target.value

}


address={
    city :'Melbourne',
    postcode :'3008',
    country :"australia",

}

 trackHandler(event){

this.address.city =event.target.value
}


/***Getter example***/

users =["john" ,"smith" ,"nikk"]
num1 =30
num2 =60

get firstusername(){
    return this.users[0]
}
get multiply(){
    return this.num1 *this.num2
}

}