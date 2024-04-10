import { AuthContext } from "../ReactContext/AuthContext";
import { useContext } from "react";

export const useAuth =()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw Error('useAuth must be used inside AuthContext provider')
    }
    return context;
}