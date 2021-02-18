import React from 'react';
import logo from '../resources/icon/icon-black.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Wallet from '@project-serum/sol-wallet-adapter';
import { getSOLBalance, getLOBEEBalance } from '../service/connectToWallet';
// import { connectToWallet, disconnectToWallet, setUserAddress, clearUserAddress } from '../redux/actions';


class TitleBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            walletConnected: false,
            userAddress: null,
            hiddenAddress: null,
            SOLbalance: -100,
            LOBEEbalance: -100,
        }
    }

    wallet = async () => {
        let providerUrl = 'https://www.sollet.io';
        let wallet = new Wallet(providerUrl);
        wallet.on('connect', async (publicKey) => {
            console.log(publicKey.toBase58());
            // await this.props.dispatch(setUserAddress(publicKey.toBase58()));
            // await this.props.dispatch(connectToWallet());
            await this.setState({ SOLbalance: await getSOLBalance(publicKey.toBase58()) });
            await this.setState({ LOBEEbalance: await getLOBEEBalance(publicKey.toBase58()) });
            await this.setState({ walletConnected: true });
            await this.setState({ userAddress: publicKey.toBase58() });
            await this.setState({ hiddenAddress: this.hideAddress(publicKey.toBase58()) })
        });
        wallet.on('disconnect', async () => {
            console.log('Disconnected');
            // await this.props.dispatch(disconnectToWallet());
            // await this.props.dispatch(clearUserAddress());
            this.setState({ walletConnected: false });
            this.setState({ userAddress: null });
        });
        await wallet.connect();
    }

    hideAddress = (address) => {
        return address.length > 20 ? `${address.substring(0, 7)}.....${address.substring(address.length - 7, address.length)}` : address;
    }

    render() {
        return (<>
            <div className="titlebar-titlebar">
                <img className="titlebar-logo" src={logo} />
                <div className="titlebar-title"> Lobster Finance</div>
                {!this.state.walletConnected && (<button className='btn-regular connect-btn blue btn' onClick={this.wallet}> Connect</button>)}
                {this.state.walletConnected && (<>
                    <button className='btn-regular lobee-balance-btn purple btn'> {this.state.LOBEEbalance +' '+' LOBEE'} </button>
                    <button className='btn-regular sol-balance-btn purple btn'> {this.state.SOLbalance +' '+' SOL'} </button>
                    <button className='btn-regular address-btn purple btn'> {this.state.hiddenAddress} </button>
                </>)}
            </div>
        </>)
    }
}

TitleBar.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    walletConnected: state.walletConnected,
    userAddress: state.userAddressReducer,
});

export default connect(mapStateToProps)(TitleBar);
