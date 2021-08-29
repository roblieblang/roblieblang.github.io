import "./topbar.scss"
import {GitHub, Email, LinkedIn, ListAlt} from "@material-ui/icons"
import { ImFileText2 } from 'react-icons/im';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#about" className="logo">Robert Lieblang </a>
                    <div className="itemContainer">
                    <a href="www.linkedin.com/in/roblieblang" target="blank"><LinkedIn className="icon" /></a>
                        <span></span>
                    </div>
                    <div className="itemContainer">
                      <a href="https://github.com/roblieblang" target="blank"><GitHub className="icon" /></a>
                        <span></span>
                    </div>
                    <div className="itemContainer">
                        <a href="https://docs.google.com/document/d/1MyFUI2qgXH4k5GckUYSGuSNiah1zFeIt/edit?usp=sharing&ouid=114404671549869871978&rtpof=true&sd=true" target="blank">
                            <ImFileText2 className="icon" />
                        </a>
                        <span></span> 
                    </div>
                    <div className="itemContainer">
                        <a href="mailto: rlieblan@depaul.edu" target="blank"><Email className="icon" /></a>
                        <span></span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
