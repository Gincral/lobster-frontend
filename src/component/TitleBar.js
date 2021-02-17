import React from 'react';
import logo from '../resources/icon/icon-black.png';

class TitleBar extends React.Component{

    render(){

        
        return (<>
            <div className="titlebar-titlebar"> 
                <img className="titlebar-logo" src={logo}/>
                <div className="titlebar-title"> Lobster Finance</div>
                <button className='btn-regular connect-btn blue btn'> Connect Wallet </button>
            </div>
        </>)
    }
    
}


export default TitleBar;
