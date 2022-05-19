import * as actionTypes from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeHomeData = (result)=>({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    authorList: result.authorList,
});



export const getHomeInfo = ()=>{
    return (dispatch)=>{
        axios.get('./api/home.json').then((res)=>{
            const result= res.data.data;
            const action = changeHomeData(result);
            dispatch(action);
        })
       
    }

};

export const addHomeList=(data, nextPage)=>({
    type:actionTypes.ADD_HOME_LIST,
    list : fromJS(data),
    nextPage
});


export const switchAuthor = (page,totalPage)=> ({
    type: actionTypes.SWITCH_AUTHOR,
    page:page
});

export const getMoreList =(page)=>{
    return (dispatch)=>{
       axios.get('./api/homeList.json?page='+page).then((res)=>{
           const result=res.data.data;

          
            dispatch(addHomeList(result,page+1));
       })
    }
};

export const toggleScrollTop =(data)=>({
    type: actionTypes.CHANGE_SCROLLSHOW,
    data
});