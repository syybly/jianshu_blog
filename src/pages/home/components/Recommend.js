
import React, {PureComponent} from 'react';
import {RecommendItem, Download} from '../style';
import recommend1 from '../statics/recommend1.png';
import recommend2 from '../statics/recommend2.png';
import recommend3 from '../statics/recommend3.png';
import recommend4 from '../statics/recommend4.png';
import download from '../statics/downloadapp.png';
class Recommend extends PureComponent{
    render() {
        return (
           <div>
                  <div>
                   <RecommendItem >
                   <img className="item-img" 
                       src={recommend1}></img>
                       {/* <img className="item-img" 
                       src="https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png"></img> */}
                      
                   </RecommendItem>
                   <RecommendItem>
                   <img className="item-img"
                       src={recommend2}></img>
                       {/* <img className="item-img"
                       src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"></img> */}
                     
                   </RecommendItem>
                   <RecommendItem >
                   <img className='item-img'
                       src={recommend3}></img>
                       {/* <img className='item-img'
                       src="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"></img> */}
                      
                   </RecommendItem>
                   <RecommendItem >
                   <img className="item-img" 
                       src={recommend4}></img>
                       {/* <img className="item-img" 
                       src="https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"></img> */}
                      
                   </RecommendItem>
                   </div>

                   <Download>
                   <img className="download_img"
                       src={download}></img>
                       {/* <img className="download_img"
                       src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"></img> */}
                   <div className="title">下载简书手机App</div>
                   <div className="content">随时随地发现和创作内容</div>
                   </Download>
           </div>
        )
    }
}

export default Recommend;