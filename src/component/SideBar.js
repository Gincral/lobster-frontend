import React from 'react';
import lobBlue from '../resources/icon/lob-blue.png'
import {airDropSOL} from '../service/airdrop';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (<>
            <div className="sidebar">
                <div className='btn-menu red btn'>Home</div>
                <div className='btn-menu orange btn'>Swap</div>
                <div className='btn-menu yellow btn'>Pool</div>
                <div className='btn-menu lime btn'>NFT</div>
                <div className='btn-menu green btn'>LOBEE Airdrop</div>
                <div className='btn-menu blue btn' onClick={()=>{airDropSOL(this.props.userAddress)}}>SOL Airdrop</div>


                <div className='sidebar-footer'>
                    <img src={lobBlue} className="blue-lob" />
                    <div> Language Function here</div><br/>
                    <div> Made with ❤️</div>
                </div>

            </div>
        </>);
    }

}

SideBar.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    walletConnected: state.walletConnected,
    userAddress: state.userAddress,
    LOBEEbalance: state.LOBEEbalance,
    SOLbalance: state.SOLbalance,
});

export default connect(mapStateToProps)(SideBar);
