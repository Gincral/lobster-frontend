import discord from '../resources/contact/discord.png'
import facebook from '../resources/contact/facebook.png'
import tele from '../resources/contact/telegram.png'
import twit from '../resources/contact/twitter.png'
export default function Footer(props) {
    const background = {
        width: '100%',
        height: '20vh',
        backgroundColor: '#d2414c',
        margin: 'auto',
        display:'flex'
    }

    const ha = {
        width:'30%',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns:'auto auto auto auto',
        
    }
    const iconStyle = {
        display:'block',
        height: '50px',
        margin: 'auto'
    }
    return (<>
        <div style={background}>
            <div style={ha}>
                <img src={discord} style={iconStyle} />
                <img src={facebook} style={iconStyle} />
                <img src={tele} style={iconStyle} />
                <img src={twit} style={iconStyle} />
            </div>

        </div>
    </>)
}

