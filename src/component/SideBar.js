import { findByPlaceholderText } from '@testing-library/react';
import React from 'react';
import lobBlue from '../resources/icon/lob-blue.png'
import {airDropSOL} from '../service/airdrop';


class SideBar extends React.Component {

    render() {

        return (<>
            <div className="sidebar">
                <div className='btn-menu red btn'>Home</div>
                <div className='btn-menu orange btn'>Swap</div>
                <div className='btn-menu yellow btn'>Pool</div>
                <div className='btn-menu lime btn'>NFT</div>
                <div className='btn-menu green btn'>LOBEE Airdrop</div>
                <div className='btn-menu blue btn' onClick={()=>{airDropSOL("AnANpzNMozaabeCS2sbvvY66cv2KVEBXwsjnBxtnfRxG".toBase58())}}>SOL Airdrop</div>


                <div className='sidebar-footer'>
                    <img src={lobBlue} className="blue-lob" />
                    <div> Language Function here</div><br/>
                    <div> Made with ❤️</div>
                </div>

            </div>
        </>);
    }

}

export default SideBar;
