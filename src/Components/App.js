import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../Actions/actions';
import {withRouter} from 'react-router-dom';
function mapStateToProps(state){
    return {
        posts:state
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators(actions,dispatch)

}

const App =withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
export default App;