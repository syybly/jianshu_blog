import * as actionTypes from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({ 
    page: 0,
    totalPage: 1,
    topicList: [],
    showScroll: false,
    articleList: [],
    articlePage:1,
    authorList: []

});

const changeHomeData = (state, action)=>{
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        authorList: fromJS(action.authorList),
       
    });
};

const addHomeList =(state,action)=>{
    return  state.merge({
        articleList:state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    });
}
export default (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.CHANGE_HOME_DATA:
           
            return changeHomeData(state,action);

        case actionTypes.ADD_HOME_LIST:
            return  addHomeList(state,action);

         case actionTypes.CHANGE_SCROLLSHOW:
             return state.set('showScroll',action.data);   
          
         case actionTypes.SWITCH_AUTHOR:
             return state.set('page',action.page)
            
        default:
            return state;
    }
    
}