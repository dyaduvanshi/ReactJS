/* eslint-disable no-useless-constructor */
import React from 'react';
//import Title from './title';
import PhotoWall from './photowall';
import {Route, Link} from 'react-router-dom';
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
            <h1>
              <Link to ='/'>PhotoWall</Link>
            </h1>
            <Route  exact path="/" render={()=>(<React.Fragment>
              
              <PhotoWall {...this.props}/>
            </React.Fragment>)}/>
  
            <Route path="/AddPhoto" render={({history})=>(
              <AddPhoto {...this.props}
               onHistory={history}
              />
            )} />
              
              
      </React.Fragment>
    }
  
  }