// check my local storage card
const getLocalStorage=()=>{
    const getStorage=localStorage.getItem('card')
    if(getStorage){
       return JSON.parse(getStorage)
    }
    return[];
}

// save my localStorage card
const saveLocalStorage=card=>{
    const saveCardStringify=JSON.stringify(card)
    localStorage.setItem('card',saveCardStringify);

}
const addCardLocalStorage=id=>{
    const card=getLocalStorage()
    card.push(id)
    saveLocalStorage(card);
}
const removeCardLocalStorage=id=>{
    const card=getLocalStorage();
    const remove=card.filter(localId=>localId!==id)
    saveLocalStorage(remove)
 

}
export{addCardLocalStorage,getLocalStorage,removeCardLocalStorage}