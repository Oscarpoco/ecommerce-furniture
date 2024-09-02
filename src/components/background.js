import { FaPinterestP } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";

function Background()
{

    const handleClick =()=>{
        alert("Clicked")
    }

    return(
        
        <div className="wrapper">
            <nav>
                <div className="logo-wrapper">
                    <h2 onClick={handleClick}>CAMERICH</h2>
                </div>

                <ul>
                    {/* NAV MENU */}
                    <div className="nav-menu">
                        <li><a href="www.google.com" onClick={handleClick}>Furniture</a></li>
                        <li><a href="www.google.com" onClick={handleClick}>Showroom</a></li>
                        <li><a href="www.google.com" onClick={handleClick}>About Us</a></li>
                        <li><a href="www.google.com" onClick={handleClick}>Trade</a></li>
                        <li><a href="www.google.com" onClick={handleClick}>Clearence</a></li>
                    </div>
                    {/* ENDS */}

                    {/* SOCIAL ICONS */}
                    <div className="social-icons">
                        <li onClick={handleClick}><TiSocialFacebook className="icon"/></li>
                        <li onClick={handleClick}><FaPinterestP className="icon"/></li>
                        <li onClick={handleClick}><FaTwitter className="icon"/></li>
                        {/* <li></li> */}
                    </div>
                    {/* ENDS */}
                </ul>
            </nav>
            {/* NAV ENDS */}

            {/* ABOUT SECTION */}
            <div id="about">
                <div className="container">
                
                    {/* left container */}
                    <div className="about-col-1">
                        <img src="cover.png" className="cover" alt="cover"></img>
                    </div>

                    {/* right container */}
                    <div className="about-col-2">
                        <div className="header-text">
                            <h1>ALISON <br></br>PLUS BED</h1>
                        </div>

                        <div className="content">
                            <h4>About the product</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut
                            veniam, quis nostrud exercitation ullamco laboris nisi ut  
                            consequat. Duis aute irure dolor in reprehenderit in voluptate
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            proident.</p>
                            <button onClick={handleClick}>ENQUIRE NOW <IoArrowForwardCircle className="arrow"/></button>

                            <div className="scroll">
                                <p>01 / 04</p>
                                <div style={{display: 'flex', justifyContent: 'center',gap: '1em'}}>
                                    <input type="radio" onClick={handleClick}></input>
                                    <input type="radio" onClick={handleClick}></input>
                                    <input type="radio" onClick={handleClick}></input>
                                    <input type="radio" onClick={handleClick}></input>
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div>

            </div>
            {/* ABOUT SECTION ENDS */}

            {/* GALLERY */}
            <div id="boxes">
                <div className="overall-box" >
                    <img src="Screen-Bed.jpg" alt="gallery"></img>
                    <h5>You may also like</h5>
                    <p>Screen Bed</p>
                </div>  
                <div className="overall-box">
                    <img src="Screen-Bed.jpg" alt="gallery"></img>
                    <p>Screen Bed</p>
                </div>  
                <div className="overall-box">
                    <img src="Screen-Bed.jpg" alt="gallery"></img>
                    <p>Screen Bed</p>
                </div>  
                <div className="overall-box">
                    <img src="Screen-Bed.jpg" alt="gallery"></img>
                    <button onClick={handleClick}>View all products</button>
                    <p>Screen Bed</p>
                </div>  
                 
            </div> 
               {/*GALLERY ENDS  */}
        </div> 

        

       
        
    )
    
}

export default Background