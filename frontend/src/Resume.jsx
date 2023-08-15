import React from 'react'
import 'react-html5video/dist/styles.css'

/* Videos */
import resHeroVideo from './videos/resumePageHero.mp4'


/* Images */
import IRC from "./photos/IRC.png"
import E from "./photos/E-lol.png"
import CODING from "./photos/Code.png"
import ADOBE from "./photos/CreativeCloud.png"
import MSO from "./photos/MSO.png"
import IRCicon from "./photos/IRC-icon.png"
import Eicon from "./photos/E-icon-lol.png"
import CODINGicon from "./photos/Code-icon.png"
import ADOBEicon from "./photos/CreativeCloud-icon.png"
import MSOicon from "./photos/MSO-icon.png"
import noVid00 from "./photos/ResumeNoVideo.png"



const Resume = () => {
    return (
        <>
            {/* Hero Banner */}
            <div class="container-fluid" className="HeroContain-videos">
                
                    <div class="row" className='videoBanner'>
                    
                        <video className="vidHeroBg" src={resHeroVideo} autoPlay loop muted poster={noVid00}></video>
                        <div class="row" className='vidHeroMask'>
                        
                        <div class="row" className='Banner'>
                            <div class="row" className='titleBox'>
                                <h4 className='title01'>MY WEB DEVELOPMENT</h4>
                                <h1 className='title00'>RESUME</h1>
                            </div>
                            <div class="row" className='titleBox'>
                                <h4 className='title01'>OVER THE LAST 5 YEARS</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Experience */}
            <div class="row" className='subHeader-row'>
                <div class="row" className='titleBox'>       
                    <h1 className='title00'>INTERNATIONAL RESCUE COMMITTEE</h1>    
                    <h4 className='title01'>IT COMMUNICATION ASSOCIATE<br></br><i>New York, New York • 01/2019 - CURRENT</i></h4>
                </div>
            </div>
            <div class="row container-resume">
                <div className='col-sm-12'>
                    <p className='description'>Serves as a subject matter expert for <b>populating and maintaining 
                    40+ webpages</b> with educational content. Responsible for assisting and coaching non-tech staff 
                    on basic HTML, attending weekly team meetings, and helping to manage monthly projects. 
                    Conducts extensive and thorough research to identify and discover new phishing scams during 
                    free time.</p>
                    <div className='titleBox'>
                        <p className='description' id="mobile-queue" style={{textAlign:"center", border: "1px rgb(239, 239, 239) solid", padding: "10px", marginTop:"5px"}}><i>TAP CARDS TO LEARN MORE</i></p>
                        <p className='description' id="laptop-queue" style={{textAlign:"center", border: "1px rgb(239, 239, 239) solid", padding: "20px"}}><i>HOVER OVER CARDS TO LEARN MORE</i></p>
                    </div>
                </div>
            </div>
            <div class="row container-resume">
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>00</p>
                                <img src={IRC} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>00</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>ALL SIGNED UP</h1>
                                <p className='card-description'>Helped about 200 employees sign up for 
                                Multi-Factor Authentication by coding an 8-step guide on how to do so within 
                                a short and quick deadline</p>
                                <div>
                                    <img src={IRCicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>00</span>
                                    <img src={IRCicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>01</p>
                                <img src={IRC} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>01</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>FILTERED OUT</h1>
                                <p className='card-description'>Developed the first filter button for the 
                                company's web pages to reduce page navigation time by 50%</p>
                                <div>
                                    <img src={IRCicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>01</span>
                                    <img src={IRCicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>02</p>
                                <img src={IRC} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>02</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>WORK FAST</h1>
                                <p className='card-description'>Played an instrumental role in multiple technological 
                                projects and ensured completion despite time, budget, and scope constraints</p>
                                <div>
                                    <img src={IRCicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>02</span>
                                    <img src={IRCicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>03</p>
                                <img src={IRC} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>03</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>COLLABS</h1>
                                <p className='card-description'>Collaborated with the IT team to ensure
                                 at least 3 web pages are fully developed or updated weekly</p>
                                 <div>
                                    <img src={IRCicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>03</span>
                                    <img src={IRCicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>04</p>
                                <img src={IRC} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>04</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>UX RESEARCH</h1>
                                <p className='card-description'>Conduct usability testing with a team to 
                                update and enhance the company's IT Service Catalog web pages</p>
                                <div>
                                    <img src={IRCicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>04</span>
                                    <img src={IRCicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>05</p>
                                <img src={IRC} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>05</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>SNEAK PEEKS</h1>
                                <p className='card-description'>Design wireframes and mockups for new web 
                                pages and present the concepts in front of stakeholders</p>
                                <div>
                                    <img src={IRCicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>05</span>
                                    <img src={IRCicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>06</p>
                                <img src={IRC} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>06</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>FOR THE USER</h1>
                                <p className='card-description'>Enhanced user experience by creating appealing 
                                content, typing engaging messages, and implementing the best web development practices </p>
                                <div>
                                    <img src={IRCicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>06</span>
                                    <img src={IRCicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>07</p>
                                <img src={IRC} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>07</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>BIG PICTURE</h1>
                                <p className='card-description'>Improved visualization by coding a 
                                card layout and hero banners</p>
                                <div>
                                    <img src={IRCicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>07</span>
                                    <img src={IRCicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* My Skills */}
            <div class="row" className='subHeader-row'>
                <div class="row" className='titleBox'>       
                    <h1 className='title00'>MY SKILLS</h1>    
                    <h4 className='title01'>PRACTICE MAKES PERMANENT</h4>
                </div>
            </div>
            <div class="row container-resume">
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>00</p>
                                <img src={CODING} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>00</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>LANGUAGES</h1>
                                <p className='card-description'>- HTML - CSS - JavaScript - 
                                SASS - Python - JSON - PHP - Java -</p>
                                <div>
                                    <img src={CODINGicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>00</span>
                                    <img src={CODINGicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>01</p>
                                <img src={CODING} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>01</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>LIBRARIES</h1>
                                <p className='card-description'>- React JS - jQuery -
                                 Vue JS -</p>
                                <div>
                                    <img src={CODINGicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>01</span>
                                    <img src={CODINGicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>02</p>
                                <img src={CODING} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>02</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>FRAMEWORKS</h1>
                                <p className='card-description'>- Bootstrap - Django REST -
                                WordPress -</p>
                                <div>
                                    <img src={CODINGicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>02</span>
                                    <img src={CODINGicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>03</p>
                                <img src={CODING} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>03</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>OTHER TOOLS</h1>
                                <p className='card-description'>- Visual Studio Code - Git Bash - Git Hub - 
                                Google Analytics - AWS S3 - Sublime Text 3 - </p>
                                 <div>
                                    <img src={CODINGicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>03</span>
                                    <img src={CODINGicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox' id="emptySpace-lol" style={{opacity:'0'}}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>LOL</p>
                                <img src={E} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>LOL</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>LOREM</h1>
                                <p className='card-description'>- This card is supposed to be hidden from your eyes. 
                                If you see this message, that means I messed up lol. Or maybe I just need an extra card to
                                display some more info...naaa I messed up lol - </p>
                                 <div>
                                    <img src={Eicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>LOL</span>
                                    <img src={Eicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>04</p>
                                <img src={ADOBE} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>04</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>ADOBE</h1>
                                <p className='card-description'>- Photoshop - Illustrator - After Effects - 
                                Premiere Pro - XD - inDesign - Lightroom - Dreamweaver - </p>
                                 <div>
                                    <img src={ADOBEicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>04</span>
                                    <img src={ADOBEicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>05</p>
                                <img src={MSO} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>05</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>MICROSOFT</h1>
                                <p className='card-description'>- Word - Excel - Outlook - 
                                Powerpoint - Forms - Azure - </p>
                                 <div>
                                    <img src={MSOicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>05</span>
                                    <img src={MSOicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* About This Website */}
            <div class="row" className='subHeader-row'>
                <div class="row" className='titleBox'>       
                    <h1 className='title00'>PERSONAL PROJECT</h1>    
                    <h4 className='title01'>ABOUT THIS RESUME WEBSITE</h4>
                </div>
            </div>
            <div class="row container-resume">
                <p className='description'>I wanted to create a <b>professional resume website which
                showcase my current coding and creative skills</b>. When I send website links to my friends
                and family, 9 times out of 10 they view the site on their smartphones. With this in mind, <b>I had to 
                design my resume website to look clean on mobile as well as on desktop</b>. Attention spans are
                shrinking in this insta-world, and people refuse to read tons of verbiage. Knowing this, <b>I assembled this website to have less text and more visuals</b> while 
                still clearly communicating my skills, interests, and personality. </p>
            </div>
            <div class="row container-resume">
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>00</p>
                                <img src={E} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>00</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>MOBILE FIRST</h1>
                                <p className='card-description'>Designed and developed a responsive 
                                5-page resume website with React JS and SaSS</p>
                                <div>
                                    <img src={Eicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>00</span>
                                    <img src={Eicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>01</p>
                                <img src={E} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>01</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>ESSENTIALS</h1>
                                <p className='card-description'>Leveraged Visual Studio Code and Git Bash 
                                to create, alter, and organize code, scripts, and style sheets</p>
                                <div>
                                    <img src={Eicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>01</span>
                                    <img src={Eicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>02</p>
                                <img src={E} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>02</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>VISUALIZER</h1>
                                <p className='card-description'>Used Adobe Photoshop to design stunning graphics 
                                and Adobe After Effects to create marvelous videos</p>
                                <div>
                                    <img src={Eicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>02</span>
                                    <img src={Eicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 summaryBox'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <p className='card-number' style={{marginTop:"5px"}}>03</p>
                                <img src={E} className='faceOfCard'/>
                                <p className='card-number'><br></br><br></br>03</p>
                            </div>
                            <div class="flip-card-back">
                                <h1 className='card-title'>MAINTAIN</h1>
                                <p className='card-description'>Ensured to regularly update the website by 
                                changing images, videos, and verbiage on the pages</p>
                                 <div>
                                    <img src={Eicon} className='cardIcons' /> 
                                    <span className='card-description' style={{opacity:".5"}}>03</span>
                                    <img src={Eicon} className='cardIcons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" className='subHeader-row'>
                <div class="row" className='titleBox'>       
                    
                </div>
            </div>
        </>
    )
}

export default Resume