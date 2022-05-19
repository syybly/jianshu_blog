import styled from 'styled-components';
export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    
    
`;
export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    
`;
export const HomeRight = styled.div`
    margin-top: 30px;
    width: 280px;
    float: right;
`;
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
    
`;
export const TopicItem = styled.div`
    float: left;
    background:#f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .picture {
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        float: right;
        border-radius: 10px;
        width: 125px;
        height: 100px;
    }
    
`;
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;
export const RecommendItem = styled.a.attrs({
  href: '#'
})`
    display: block;
    width: 280px;
    height: 50px;
    border-radius: 4px;
    margin-bottom: 6px;
    cursor: pointer;
    .item-img {
        height: 50px;
        width: 280px;
    }
`;
export const Download = styled.div`
    height: 82px;
    
    padding:10px 22px;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    margin-top: 10px;
    border-radius: 6px;
    .download_img {
        float: left;
        width: 60px;
        height: 60px;
        opacity: .85;
        cursor: pointer;
    }
    .title {
        float: left;
        font-size: 15px;
        color: #333;
        margin-left: 12px;
        margin-top: 10px;
        cursor: pointer;
    }
    .content {
        float: left;
        font-size: 13px;
        color: #999;
        margin-left: 12px;
        margin-top: 8px;
        cursor: pointer;
    }
 `;
export const RecommendWritter = styled.div`
    height: 20px;
    line-height: 20px;
    margin-top: 30px;
    margin-bottom: 5px;
    font-size: 14px;
    color: #969696;
    .title {
        float: left;
    }
    .iconfont {
        float: right;
        font-size: 12px;
        margin-right: 5px;
    }
    .link {
        float: right;
        cursor: pointer;
    }
 `;
export const Writters = styled.li`
    height: 60px;
    list-style: none;
    padding: 5px 0;
    box-sizing: border-box;
    margin-bottom: 4px;
    .wrapper {
        float: left;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
    }
    .writter-img {
        height: 50px;
        width: 50px;
    }
    .author-wrapper {
        float: left;
        margin-left: 10px;
    }
    .author-name {
        font-size: 14px;
        color: #333;
        display: block;
        margin-top: 10px;
        cursor: pointer;
       
    }
    .author-desc {
        color: #969696;
        font-size: 12px;
        margin-top: 8px;
       
    }
    .follow {
        float: right;
        cursor: pointer;
        font-size: 14px;
        color: #42c02e;
        margin-top: 6px;
    }
`;
export const CheckAll = styled.div`
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    margin-top: 10px;
    background:#f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
    font-size: 13px;
    color: #787878
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 30px 0;
    background: #a5a5a5;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;
export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`;