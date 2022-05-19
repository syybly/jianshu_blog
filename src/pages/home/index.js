
import React, {PureComponent} from 'react';
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style';
import Topic from './components/Topic';
import  List from './components/List';
import  Recommend from './components/Recommend';
import   Writter from './components/Writter';
import { actionCreators } from './store';
import { connect } from 'react-redux';
class Home extends PureComponent {
    
    render() {
        return (
           <HomeWrapper>
               <HomeLeft>
                   <img className="banner-img" alt='' src="https://imgs.qunarzz.com/vs_ceph_vs_tts/79e7680a-ec0e-44a3-abb0-2fc25dfaae42.jpg_r_390x260x95_d3cc8f2b.jpg"></img>
              < Topic/>
              <List />
               </HomeLeft>
               <HomeRight>
                   <Recommend />
                   <Writter />
               </HomeRight>
               {this.props.showScroll ?  <BackTop onClick={this.handleBackTop}>顶部</BackTop>: null}
              
           </HomeWrapper>
        )
    }

    handleBackTop() {
        // var top = document.body.scrollTop || document.documentElement.scrollTop
        //    window. scrollBy(0,-top);
        //scrollTo(0,0);
       // document.body.scrollTop = 0;
      //  document.documentElement.scrollTop = 0;
      var timer=setInterval(function(){
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        var ispeed=Math.floor(-scrollTop/6);
        console.log(ispeed);
        if(scrollTop==0){
            clearInterval(timer);
        }
        document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
    },20);

      //  console.log("scroll");
    }
    componentDidMount() {
         this.bindEvents()  ; 
        this.props.changeHomeData();
         //  console.log(res);
           
       
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollShow)
    }
}

const mapState = (state)=>({
    showScroll: state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch)=>({
    changeHomeData() {
       const action = actionCreators.getHomeInfo();
       dispatch(action);
    },

    changeScrollShow (){
        if(document.documentElement.scrollTop>300){
            const action = actionCreators.toggleScrollTop(true);
            dispatch(action);
        }else {
            dispatch(actionCreators.toggleScrollTop(false));
        }
    }
});

export default connect(mapState, mapDispatch)(Home);