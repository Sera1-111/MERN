import { useState } from "react";
import { useAuth } from "./UseAuth";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuth(); 

    const login = async (username, email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('https://mern-1ogg.onrender.com/api/user/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, email, password }) 
            });

            if (!response.ok) {
                const json = await response.json(); //extracting the error msg from json
                setIsLoading(false); // as  the loading attempt has failed
                setError(json.error);
            } else {
                const json = await response.json();
                localStorage.setItem('user', JSON.stringify(json)); //storing the data in the loal storage
                dispatch({type: 'LOGIN', payload: json});
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };

    return { login, isLoading, error };
};
