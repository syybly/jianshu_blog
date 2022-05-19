import {connect} from 'react-redux';
import React, {PureComponent} from 'react';
import {TopicWrapper, TopicItem} from '../style';
class Topic extends PureComponent {
    render() {
        const {list} = this.props;
        return (
           <TopicWrapper>
               {list.map((item)=>{
                   return <TopicItem key={item.get('id')}>
                       <img alt='' className='picture'
                   src={item.get('imgUrl')}></img>{item.get('title')}</TopicItem>
               })}
               
                  
           </TopicWrapper>
        )
    }
}
const mapState =(state)=> ({
    list: state.get('home').get('topicList')
});

const mapDispatch = (dispatch) =>{

}
export default connect(mapState, null)(Topic);