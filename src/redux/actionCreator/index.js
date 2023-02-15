import { SAVEINPUTVALUE } from "../actionType"

export const saveInputValue = (inputValue)=>{
    return{
        type : SAVEINPUTVALUE , 
        payload : inputValue
    }
}