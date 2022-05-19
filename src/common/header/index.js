import React, {Component} from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition,Button, SearchWrapper, SearchInfo, SearchInfoTitle, 
    SearchInfoSwitch, SearchInfoItem, SearchInfoList} from './style';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from './store';
import {Link} from 'react-router-dom';
class Header extends Component {

     getListArea () {
         const {focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
         const newList = list.toJS();
         const pageList = [];
         if(newList.length) {
            for(var i = page*5; i<page*5+5; i++){
                pageList.push ( <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
             
            }
         }
         
        if(focused || mouseIn) {
            return(
            <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <SearchInfoTitle>Hot 
                            <SearchInfoSwitch onClick={()=>handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon=icon}}className='iconfont spin'>&#xe851;</i>
                                change</SearchInfoSwitch>
                            </SearchInfoTitle>
                            <SearchInfoList>
                            {pageList}
                               
                            </SearchInfoList>  
                        </SearchInfo>
            )}else {
                return null
            }
    }

    render () {
        const { focused , handleInputFocus, handleInputBlur, list} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                    </Link>
                    <Nav>
                        <NavItem className='left active'>Home Page</NavItem>
                        <NavItem className='left'>Download App</NavItem>
                        <NavItem className='right'>
                            <i className='iconfont'>&#xe636;</i>
                        </NavItem>
                        <Link to='/login'>
                        <NavItem className='right'>Log In</NavItem>
                        </Link>
                        <SearchWrapper>
                        <CSSTransition in={focused} timeout={200} classNames="slide">
                        <NavSearch className={focused ? 'focused':''}
                        onFocus={()=>handleInputFocus(list)}
                        onBlur={handleInputBlur}></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe62d;</i>
                        {this.getListArea()}
                        </SearchWrapper>
                        
                    </Nav>
                    <Addition>
                        <Button className= 'writting'>
                            <i className='iconfont' style={{marginRight:7}}>&#xe6e5;</i>
                            Write An Article</Button>
                        <Button className='register'>Sign Up</Button>
                        
                    </Addition>
                </HeaderWrapper>
        )
        
    }
}



const mapStateToProps = (state)=>{
    return {
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header','totalPage']),
        mouseIn: state.getIn(['header','mouseIn'])
        //focused: state.get('header').get('focused')
    }

}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(list) {
            console.log(list);
            (list.size === 0)&& dispatch(actionCreators.getList());
        
            const action = actionCreators.searchFocus();
            dispatch(action);
        },

        handleInputBlur() {
            
            dispatch(actionCreators.searchBlur());
        },

        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },

        handleChangePage(page,totalPage, spin) {
            let originAngel =  spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngel) {
                originAngel = parseInt(originAngel,10);
            } else {
                originAngel = 0;
            }
            spin.style.transform = 'rotate('+ (originAngel+360) + 'deg)';
           // console.log(originAngel);

            //spin.style.transform = 'rotate(360deg)';
            if(page<totalPage-1) {
                dispatch(actionCreators.changePage(page+1));
            } else {
                dispatch(actionCreators.changePage(0));
            }
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);