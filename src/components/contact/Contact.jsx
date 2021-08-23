import { SpaRounded } from "@material-ui/icons";
import { useState } from "react";
import "./contact.scss"
import {GitHub, Email, LinkedIn, ListAlt} from "@material-ui/icons"

export default function Contact() {
    const [message,setMessage] = useState(false)
    
    const handleSubmit = (e)=>{        
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
                <h1>Contact</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder=" Email"/>
                    <textarea placeholder=" Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply as soon as I can.</span>}
                </form>
                <div className="footer">
                <div className="itemContainer">

                    <a href="www.linkedin.com/in/roblieblang" target="blank"><LinkedIn className="icon" /></a>
                    <a href="www.linkedin.com/in/roblieblang" target="blank"><span>LinkedIn</span></a>
                    </div>
                    <div className="itemContainer">
                      <a href="https://github.com/roblieblang" target="blank"><GitHub className="icon" /></a>
                      <a href="https://github.com/roblieblang" target="blank"><span>GitHub</span></a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://docs.google.com/document/d/1MyFUI2qgXH4k5GckUYSGuSNiah1zFeIt/edit?usp=sharing&ouid=114404671549869871978&rtpof=true&sd=true" target="blank">
                            <ListAlt className="icon" />
                        </a>
                        <a href="https://docs.google.com/document/d/1MyFUI2qgXH4k5GckUYSGuSNiah1zFeIt/edit?usp=sharing&ouid=114404671549869871978&rtpof=true&sd=true" target="blank"><span>Resume</span></a> 
                    </div>
                    <div className="itemContainer">
                        <a href="mailto: rlieblan@depaul.edu" target="blank"><Email className="icon" /></a>
                        <a href="mailto: rlieblan@depaul.edu" target="blank"><span>Email</span></a>
                    </div>

                </div>
                
            </div>
    )
}
