/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';



const Title=(props)=>{
return (<React.Fragment><h2>{props.title}</h2></React.Fragment>);
}



const List=(props)=>{

  return (
    <React.Fragment>
  <ol>
    {props.list.map((task,index) => (<li key={index}>{task}</li>))}
  </ol>
</React.Fragment>

  );
}

class Main extends React.Component {

  

  render (){
    
    const tasks = ["Logi to HVD", "Open IE", "Open IE", "Fill the GBS survey", "Stay online for sometime"];
    const todos=["Read  Angular HTTP ","Prepare Lunch","Read few pages from algorithm unlocked"];
    return <React.Fragment>
            <Title title="GBS survey steps" />
            <List list={tasks}/>
            <Title title="TO Do List"/>
              <List list ={todos}/>
    </React.Fragment>
  }

}


ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
