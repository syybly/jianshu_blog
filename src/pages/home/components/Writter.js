import {connect} from 'react-redux';
import React, {PureComponent} from 'react';
import {RecommendWritter, Writters, CheckAll} from '../style';
import { actionCreators } from '../store';
class Writter extends PureComponent {
    
    getListArea() {
        const { list, page, totalPage } = this.props;
       
        const pageList = [];
         const newList = list.toJS();
        if(newList.length) {
            for(var i = page*5; i<page*5+5; i++){
                pageList.push (newList[i]);

            }
         }
        
         console.log(pageList,page, totalPage);
        return pageList;
    }
    render() {
        const { list, page, totalPage, handleSwitchAuthor } = this.props;

        return (
           <div>
               <RecommendWritter>
                   <span className="title">推荐作者</span>
                  
                   <a className="link" onClick={()=>handleSwitchAuthor(page,totalPage)}>换一批</a>
                   <i className="iconfont">&#xe851;</i>
               </RecommendWritter>
               <div>
                
                { this.getListArea().map((item)=>{
                return (
                    <Writters key={item.id}>
                     <div className="wrapper">
                   <img className="writter-img"
                   src={item.imgUrl}></img>
                   </div>
                   <div className="author-wrapper">
                   <a className="author-name">{item.name}</a>
                   <p className="author-desc">{item.desc}</p>
                   </div>
                   <a className="follow">+关注</a>
               </Writters>
                )} ) }
                  
               </div>
               <CheckAll>查看全部</CheckAll>
           </div>
        )
    }

}

const mapState = (state)=>({
    list: state.getIn(['home','authorList']),
    page: state.getIn(['home', 'page']),
    totalPage: state.getIn(['home','totalPage']),
});


const mapDispatch = (dispatch) =>{
    return {
        
         handleSwitchAuthor (page,totalPage) {
            if(page<(totalPage-1)) {
                dispatch(actionCreators.switchAuthor(page+1));
            } else {
                dispatch(actionCreators.switchAuthor(0));
            }
            console.log(page,totalPage);
           
    }
}
}
export default connect(mapState, mapDispatch)(Writter);
