//This custom hook is designed to be used within components that need access to the authentication context 
import { AuthContext } from "../ReactContext/AuthContext";
import { useContext } from "react";

export const useAuth =()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw Error('Must be used inside AuthContext provider')
    }
    return context;
}