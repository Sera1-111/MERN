import { useState } from "react";
import { useAuth } from "./UseAuth";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuth(); 

    const signup = async (username, email, password) => { // Added username parameter
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('https://mern-1ogg.onrender.com/api/user/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, email, password }) // Modified body to include username
            });

            if (!response.ok) {
                const json = await response.json();
                setIsLoading(false);
                setError(json.error);
            } else {
                const json = await response.json();
                localStorage.setItem('user', JSON.stringify(json));
                dispatch({type: 'LOGIN', payload: json});
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };

    return { signup, isLoading, error };
};
