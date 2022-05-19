import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {LoginWrapper } from './style';

class Login extends PureComponent {

    render() {
       // console.log(this.props.location.search); ？id=
       // console.log(this.props.match.params.id); 动态获取路由
        return (
            <LoginWrapper></LoginWrapper>
        )
    }

    componentDidMount() {
       
    }
}

const mapState =(state)=> ({
   
});

const mapDispatch= (dispatch)=> ({
    
})
export default connect(mapState, mapDispatch)(Login);