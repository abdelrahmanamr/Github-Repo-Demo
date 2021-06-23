import {WILL_GET_REPOS,GET_REPOS_SUCCESS,GET_REPOS_FAILURE, UPDATE_REPO_LIST} from '../actions/repoActions'

const initState = {
    repos: [],
    fetchingRepos: false,
    initialData:[]
}

const repoReducer = (state=initState, action) => {
    switch(action.type){
        case WILL_GET_REPOS:
            return{
                ...state,
                fetchingRepos:true,
            }
        case GET_REPOS_SUCCESS:
            return {
                ...state,
                repos: action.data,
                initialData: action.data,
                fetchingRepos: false,
            }
        case GET_REPOS_FAILURE:
            return {
                ...state,
                fetchingRepos:false,
            }
        case UPDATE_REPO_LIST:
            return {
                ...state,
                repos:action.data,
            }
        default:
            return state
    }

}

export default repoReducer