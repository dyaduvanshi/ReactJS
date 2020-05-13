/* eslint-disable no-useless-constructor */
import React from 'react';
import Title from './title';
import PhotoWall from './photowall';
import {Route} from 'react-router-dom';
import AddPhoto from './AddPhoto';

export default class Main extends React.Component {

    constructor(){
      super();
      
    }
  
    
    onAddPhoto(postSubmitted){
      this.setState(state=>({
        posts: state.posts.concat([postSubmitted])
      }))
     
    }
    
    
  
  
    render (){
     
     
      
  
  return <React.Fragment>
            <Route  exact path="/" render={()=>(<React.Fragment>
              <Title title="Photowall" />
              <PhotoWall {...this.props}/>
            </React.Fragment>)}/>
  
            {/*<Route path="/AddPhoto" render={({history})=>(
              <AddPhoto onAddPhoto={(addedPost)=>{
                this.onAddPhoto(addedPost);
                history.push('/'); 
              }}/>
            )} />*/}
              
              
      </React.Fragment>
    }
  
  }