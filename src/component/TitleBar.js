import React from 'react';

class TitleBar extends React.Component{

    render(){

        
        return (<>
            <div className="titlebar-titlebar"> 
                <div className="titlebar-title">🦞 Lobster Finance</div>
                <button className='btn-regular connect-btn blue btn'> Connect Wallet </button>
            </div>
        </>)
    }
    
}


export default TitleBar;
