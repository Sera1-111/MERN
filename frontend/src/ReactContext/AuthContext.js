//importing all the built-in react functionalities
import {createContext, useReducer,useEffect} from 'react'

export const AuthContext = createContext() //creating a react context object called AuthContext
const authReducer = (state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGOUT':
        return {user : null}
        default :
        return state

    }
    

}
// AuthContextProvider will be responsible for providing the AuthContext value to its child components.
export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(authReducer,{
        user : null
    })
    useEffect(()=>{
         // Checking if there's a user in local storage if found then parse it back to js 
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            // Dispatch a login action with the parsed user data if user
            dispatch({type :'LOGIN', payload: user})
        }
    },[])
    console.log('AuthContext state', state);
    return (
        <AuthContext.Provider value={{...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}