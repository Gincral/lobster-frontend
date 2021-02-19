import React from 'react';


class SideBar extends React.Component {

    render(){

        return(<>
        <div className="sidebar">
            <div className='btn-menu purple btn'>Home</div>
            <div className='btn-menu red btn'>Swap</div>
            <div className='btn-menu orange btn'>Pool</div>
            <div className='btn-menu yellow btn'>NFT</div>
            <div className='btn-menu lime btn'>NFT</div>
            <div className='btn-menu green btn'>NFT</div>
            <div className='btn-menu blue btn'>NFT</div>
        </div>
        </>);
    }

}

export default SideBar;
