import React from 'react';
import TitleBar from './TitleBar';
import loblogo from '../resources/icon/icon-black.png';
import sollogo from '../resources/icon/solana-icon.png';
import pic from '../resources/icon/lob-red.png'
import SideBar from './SideBar';
import { withTranslation } from 'react-i18next';

class Home extends React.Component {

    componentDidMount = () => {
        setInterval(this.genNumber(1454, 95, 76, 95), 2000);
        // setTimeout(this.genNumber(14.5445));
    }

    genNumber = (value1, value2, value3, value4) => {
        document.querySelector("a1").style.setProperty("--num", value1);
        document.querySelector("a1").style.setProperty("--end", value1);
        document.querySelector("a2").style.setProperty("--num", value2);
        document.querySelector("a2").style.setProperty("--end", value2);
        document.querySelector("a3").style.setProperty("--num", value3);
        document.querySelector("a3").style.setProperty("--end", value3);
        document.querySelector("a4").style.setProperty("--num", value4);
        document.querySelector("a4").style.setProperty("--end", value4);
        document.querySelector("a5").style.setProperty("--num", value1);
        document.querySelector("a5").style.setProperty("--end", value1);
        document.querySelector("a6").style.setProperty("--num", value2);
        document.querySelector("a6").style.setProperty("--end", value2);
        document.querySelector("a7").style.setProperty("--num", value3);
        document.querySelector("a7").style.setProperty("--end", value3);
        document.querySelector("a8").style.setProperty("--num", value4);
        document.querySelector("a8").style.setProperty("--end", value4);
    };

    render() {
        const { t } = this.props;
        const number1 = 1454.45;
        const number2 = 54.45;
        return (<>
            <TitleBar />
            <div className="home-grid">
                <SideBar />
                <div className="home">
                    <div className="home-content">
                        <div className="home-title">
                            <div className='titleb'>Lobster Finance</div>
                            <div className='sub-title title-sub'>{t('title')}</div><br></br>
                            <img src={pic} className='title-pic' />
                        </div>
                        <div className="home-pool">
                            <div className='title-yellow'>Farms & Staking </div>
                            <div className="grid-two"> 
                            <div className="home-pool-left">
                                <img className='logo-md' src={loblogo} />
                                <div className='home-pool-number'><a1 className="movingNumber"></a1>.<a2 className="movingNumber"></a2></div>
                                <div className='header1'>LOBEE to Harvest</div>
                                <div className='home-pool-number'><a3 className="movingNumber"></a3>.<a4 className="movingNumber"></a4></div>
                                <div className='header1'> LOBEE in Farms </div>
                            </div>
                            <div className="home-pool-left">
                                <img className='logo-md' src={sollogo} />
                                <div className='home-pool-number'><a5 className="movingNumber"></a5>.<a6 className="movingNumber"></a6></div>
                                <div className='header1'>LOBEE to Harvest</div>
                                <div className='home-pool-number'><a7 className="movingNumber"></a7>.<a8 className="movingNumber"></a8></div>
                                <div className='header1'> SOL in Farms </div>
                            </div>
                            </div>



                    
                            
                            
                               
                           
                            {/* <div className='home-buttons'>
                                <button className='btn-regular orange btn'> Harvest </button>
                                <button className='btn-regular green btn'> Compound </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }

}

const HomeComponent = withTranslation()(Home);
export default HomeComponent;
