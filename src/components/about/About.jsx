import "./about.scss"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vRwVlQyuOWl4eTghje89iiEKq3ek2vq3bRw3RKv6tUWfQiShy7lcwHdEnvFvhMVaw/pub?embedded=true">
                </iframe>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Hello, </h1>
                        <br /> 
                        <p> 
                        I'm Robert Lieblang.
                        <br />
                        I am pursuing a BS in Computer Science with a concentration in Software Development from Depaul University. 
                        I have experience with a variety of technologies (see resume to the left), and you can see what I've done with some of them 
                        on the next page. The page after that includes my contact information. 
                    </p>
                    <br />
                    <h2>Thanks for visiting.</h2>
                </div>
              {/*   <a href="#projects">
               <img src="https://img.icons8.com/ios-filled/100/000000/chevron-down.png" alt="Down arrow"/></a> */}            
            </div>
        </div>
    )
}
