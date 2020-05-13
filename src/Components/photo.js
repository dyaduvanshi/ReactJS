import React from 'react';
const Photo=(props)=>{

  console.log(props);
    return (<figure className="figure">

            <img className="photo" src={props.post.imageLink} alt={props.post.description}/>
            <figcaption><p>{props.post.description}</p></figcaption>
            <div className="button-container">
              <button className="remove-button" onClick={()=>{props.removePost(props.index)}
              }> Remove </button>
            </div>
     </figure>
  
    );
  }

  export default Photo ;