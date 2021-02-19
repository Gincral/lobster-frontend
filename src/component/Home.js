import React from 'react';
import TitleBar from './TitleBar';
import logo from '../resources/icon/icon-black.png';
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
                    <div className="home-title">
                        <div className='home-line home-left'>🦞</div>
                        <div className='home-line'>
                            <div className='titleb'>Lobster Finance</div>
                            <div className='header2 home-line-sub'>{t('title')}</div>
                            {/* <div className='header2 home-line-sub'>{ t('title-two') }</div> */}

                        </div>
                        <div className='home-line home-right'>🦞</div>
                    </div>
                    <div className="home-pool">
                        <div className='header1'>Your Staking LOBEEs:</div>
                        <div className='title home-total'>
                            <img className='inblock logo-md' src={logo} />
                            <div className='inblock home-number'><a1 className="movingNumber"></a1>.<a2 className="movingNumber"></a2></div>
                            <div className='inblock header2'>LOBEEs</div>
                        </div>
                        <div className='header1'> LOBEEs to Harvest: </div>
                        <div className='title home-harvest'>
                            <img className='inblock logo-md' src={logo} />
                            <div className='inblock home-number'><a3 className="movingNumber"></a3>.<a4 className="movingNumber"></a4></div>
                            <div className='inblock header2'>LOBEEs</div>
                        </div>
                        <div className='home-buttons'>
                            <button className='btn-regular orange btn'> Harvest </button>
                            <button className='btn-regular green btn'> Compound </button>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }

}

const HomeComponent = withTranslation()(Home);
export default HomeComponent;
