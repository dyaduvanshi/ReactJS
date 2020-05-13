import posts from '../Data/posts';
const postsReducer=function(state=posts,action){

    switch(action.type){

        case 'Remove_Post':
            return [...state.slice(0,action.index),...state.slice(action.index+1)];

        case 'Add_Post':
            return [...state,action.post]
        default :
            return state

    }


}

export default postsReducer;