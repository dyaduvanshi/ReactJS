//Remove Action 


export function removePost(index){

    return {
        type: 'Remove_Post',
        index :index
    }

}

export function addPost(post){
    return {
        type :'Add_Post',
        post
    }
}

//Adding Post

