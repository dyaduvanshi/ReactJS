import React from 'react';


class AddPhoto extends React.Component {

constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
}

    handleSubmit(event){
        event.preventDefault();
        const imageLink=event.target.elements.Link.value;
        const description=event.target.elements.Description.value;
        const post ={
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if(description  && imageLink){
            this.props.addPost(post);
            this.props.onHistory.push('/')
            
        }
    }

    render(){
        return (<React.Fragment>
                  <h1>Photo Wall</h1>
                  <form className='form' onSubmit={this.handleSubmit}>
                      <input placeholder='Link' type='text' name="Link"/>
                      <input placeholder='Description' type='text' name="Description"/>
                      <button > Post </button>
                          
                  </form>
            </React.Fragment>)
    }
}

export default AddPhoto ;