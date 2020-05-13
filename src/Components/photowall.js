import React ,{Component } from 'react';

import Photo from './photo';
import {Link} from 'react-router-dom';
class PhotoWall extends Component {

    render(){
        

        return <React.Fragment>
            <Link className='addIcon' to='/AddPhoto'></Link>
         <div className="photoGrid">

                    {this.props.posts.sort((x,y)=>y.id-x.id).map((post,index)=><Photo key={index} post={post} {...this.props} index={index}/>)}
            
               </div>
               </React.Fragment>
    }
}

export default PhotoWall