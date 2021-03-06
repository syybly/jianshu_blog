import styled from 'styled-components';
import logoPic from '../../statics/logo.png';


export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div.attrs({
    href:'/'
})`
    position: absolute;
    left:0;
    top: 0;
    height: 58px;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 10px;
    box-sizing: border-box;
    margin: 0 auto;
    
`  
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
        cursor: pointer;
    }
    &.active {
        color: #ea6f5a;
    }`
    
 export const NavSearch = styled.input.attrs({
     placeholder: '搜索'
 })`
     width: 160px;
     height : 38px;
     padding: 0 30px 0 20px;
     box-sizing: border-box;
     border : none;
     outline: none;
     margin: 9px 0 0 20px;
     border-radius: 19px;
     background: #eee;
     font-size: 14px;
     color: #777;
     &::placeholder {
         color: #999;
     }
     &.focused {
         width: 240px;

     }
     &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
    `   

export const Addition = styled.div`
    position: absolute;
    right:0;
    top:0;
    height: 56px;`    

 export const Button = styled.div`
     &.register {
         color : #ec6149;
         cursor: pointer;
     }
     &.writting {
        color : #fff;
        background: #ec6149;
        cursor: pointer;
    }
     float: right;
     height: 38px;
     line-height: 38px;
     border-radius: 19px;
     margin: 9px 20px 0 0;
     padding: 0 20px;
     border : 1px solid #ec6149;
     font-size: 14px;
    `   

    export const SearchWrapper = styled.div`
        position: relative;
        float: left;
       
        .zoom {
            position: absolute;
            right: 5px;
            bottom: 5px;
            width: 30px;
            line-height: 30px;
            border-radius: 15px;
            text-align: center;
            &.focused {
                background: #777;
                color :#fff;
            }
        }
        
    `

    export const SearchInfo = styled.div`
        position: absolute;
        left: 0;
        top: 58px;
        width: 240px;
        background: #fff;
        padding: 0 20px;
    
        box-shadow: 0 0 8px rgba(0,0,0, .2);
    `

    export const SearchInfoTitle = styled.div`
       
        margin-top: 20px;
        margin-bottom: 15px;
        line-height: 15px;
        font-size: 14px;
        color: #969696;
    `

    export const SearchInfoSwitch = styled.span`
        float: right;
        font-size: 12px;
        cursor: pointer;
        .spin {
            display: block;
            float: left;
            font-size: 12px;
            margin-right:2px;
            transition: all .2s ease-in;
            
            transform-origin: center center;
        }
    `

    export const SearchInfoItem = styled.a`
        display: block;
        float: left;
        line-height: 20px;
        margin-right: 10px;
        margin-bottom: 15px;
        padding: 0 5px;
        font-size: 10px;
        border: 1px solid #ddd;
        color: #787878;
        border-radius: 3px;
      
      `

     export const SearchInfoList = styled.div`
        overflow: hidden;

     ` 