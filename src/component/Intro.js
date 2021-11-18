import React from 'react';
import TitleBar from './TitleBar';
import pic from '../resources/icon/icon-black.png'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from './footer'

class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

   contentStyle = {
        width: '80%',
        height: 'calc(80vh - 64px)',
        margin: 'auto',
    }

    iconStyle = {
        height: '70%',
        top:'15%',
        right: '10%',
        position: 'absolute'
    }


    render() {
        
        return (<>
            <TitleBar />
            <div style ={this.contentStyle} >
                <div className='titleb-1'>Lobster Finance</div>
                <div className='sub-title title-sub'>There is Only One Shiba Inu Named Lobster!</div><br></br>
                <img src={pic} style={this.iconStyle} />   
            </div>
            <Footer/>
        </>)
    }

}

Intro.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    walletConnected: state.walletConnected,
    userAddress: state.userAddress,
});

export default connect(mapStateToProps)(Intro);

