import axios from 'axios';

export const WILL_GET_REPOS = 'WILL_GET_REPOS' 
export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS'
export const GET_REPOS_FAILURE = 'GET_REPOS_FAILURE'
export const UPDATE_REPO_LIST = 'UPDATE_REPO_LIST'

export const getRepo  = () =>{
    return (dispatch) => {
        dispatch({
            type: WILL_GET_REPOS,
        })
        axios.get('https://api.github.com/users/abdelrahmanamr/repos'
            )
            .then(response =>{
                return dispatch({
                    type: GET_REPOS_SUCCESS,
                    data: response.data
                })
            })
            .catch(error =>{
                return dispatch({
                    type: GET_REPOS_FAILURE,
                })
            })
    }
}

export const updateRepo = (data) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_REPO_LIST,
            data: data,
        })
    }
}