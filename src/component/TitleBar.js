import React from 'react';
import logo from '../resources/icon/icon-black.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Wallet from '@project-serum/sol-wallet-adapter';
import { getSOLBalance, getLOBEEBalance } from '../service/connectToWallet';
import { connectToWallet, disconnectToWallet, setUserAddress, clearUserAddress, setLOBEEBalance, clearLOBEEBalance, setSOLBalance, clearSOLBalance} from '../redux/actions';


class TitleBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            walletConnected: this.props.walletConnected,
            hiddenAddress: null,
            SOLbalance: -100,
            LOBEEbalance: -100,
            buttonText: "Connect To Wallet",
        }
    }

    wallet = async () => {
        await this.setState({ buttonText: "Connecting" });

        let wallet = new Wallet('https://www.sollet.io');
        wallet.on('connect', async (publicKey) => {
            console.log(publicKey.toBase58());
            const SOLbalance = await getSOLBalance(publicKey.toBase58());
            const LOBEEbalance = await getLOBEEBalance(publicKey.toBase58());

            await this.setState({ SOLbalance: SOLbalance });
            await this.setState({ LOBEEbalance: LOBEEbalance });
            await this.setState({ walletConnected: true });
            await this.setState({ hiddenAddress: this.hideAddress(publicKey.toBase58()) })
            
            await this.props.dispatch(connectToWallet());
            await this.props.dispatch(setUserAddress(publicKey));
            await this.props.dispatch(setLOBEEBalance(LOBEEbalance));
            await this.props.dispatch(setSOLBalance(SOLbalance));
            
        });
        wallet.on('disconnect', async () => {
            await this.setState({ buttonText: "Connect To Wallet" });
            console.log('Disconnected');
            this.setState({ walletConnected: false });
            this.setState({ userAddress: null });
            
            await this.props.dispatch(disconnectToWallet());
            await this.props.dispatch(clearUserAddress());
            await this.props.dispatch(clearLOBEEBalance());
            await this.props.dispatch(clearSOLBalance());
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
                {!this.state.walletConnected && (<button className='btn-regular connect-btn red btn' onClick={this.wallet}> {this.state.buttonText}</button>)}
                {this.state.walletConnected && (<>
                    <button className='btn-regular lobee-balance-btn'> {this.state.LOBEEbalance +' '+' LOBEE'} </button>
                    <button className='btn-regular sol-balance-btn'> {this.state.SOLbalance +' '+' SOL'} </button>
                    <button className='btn-regular address-btn'> {this.state.hiddenAddress} </button>
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
    userAddress: state.userAddress,
    LOBEEbalance: state.LOBEEbalance,
    SOLbalance: state.SOLbalance,
});

export default connect(mapStateToProps)(TitleBar);
