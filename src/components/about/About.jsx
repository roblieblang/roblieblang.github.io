import "./about.scss"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <iframe className="responsive-iframe" src="https://docs.google.com/document/d/e/2PACX-1vQslIh0uKwLetTr9eDhLLG_ie74q2MnrRrGdhzV7r73kBdo7Ki2emPL9SOR5gmpgw/pub?embedded=true">
                    </iframe>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Hello, </h1>
                        <p> 
                        My name is Robert Lieblang.
                        <br />
                        I am pursuing a BS in Computer Science with a concentratiion in Software Development from DePaul University. 
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
