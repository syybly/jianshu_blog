import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {DetailWrapper,LeftWrapper, Header, Content} from './style';
import {actionCreators} from './store';
class Detail extends PureComponent {

    render() {
       // console.log(this.props.location.search); ？id=
       // console.log(this.props.match.params.id); 动态获取路由
        return (
           <div>

               <DetailWrapper>
                   <LeftWrapper>
                   <Header>{this.props.title}</Header>
                   <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
                   </Content>
                   </LeftWrapper>      
               </DetailWrapper>
               
           </div> 
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState =(state)=> ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
});

const mapDispatch= (dispatch)=> ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
})
export default connect(mapState, mapDispatch)(Detail);