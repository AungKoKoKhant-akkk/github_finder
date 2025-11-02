import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';


const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_API;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN_API;

export const GithubProvider = ({ children }) => {

    const initialState = {
        users: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);






    // Fetch initial users testing api purpose
    const searchUsers = async (text) => {
        const params = new URLSearchParams({
            q: text
        });
        setLoading();
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const { items } = await response.json();

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }



    return <GithubContext.Provider
        value={{
            users: state.users,
            loading: state.loading,
            searchUsers,
            clearUsers
        }}
    >
        {children}
    </GithubContext.Provider>

}


export default GithubContext;