import React from 'react'

/* Images */
import ME from "./photos/OsmelShoot.png"


const About = () => {
    return (
        <>
            <div class="row" className='subHeader-row' style={{marginTop:"-115px", height:"25vh"}}>
                <div class="row" className='titleBox'>   
                    {/* I'll add a Hero Picture or video for this page later */}    
                </div>
            </div>
            <div class="row container-resume">
                <div className='col-sm-12 col-lg-4'>
                    <img src={ME} className='aboutImages'/>
                </div>
                <div className='col-sm-12 col-lg-8'>
                    <h1 className='title00' style={{paddingBottom:"20px"}}>ABOUT ME</h1>
                    <p className='description'>I'm a creative tech-savvy developing specialist with 5 years of experience in 
                    designing web-based interfaces and optimizing user experience. Strong knowledge in 
                    translating UX concepts into code and designing responsive interfaces. Communicative 
                    and team-oriented with proficiency in React JS, Sass, Bootstrap, Python, Adobe Creative Suite, 
                    Microsoft Office, and so much more. Hoping to help your company grow by combining excellent customer 
                    service skills and technical knowledge to create exciting and creative web content.</p>
                    <p className='description'>Contact me today:<b><a className='menu' href="tel:7189093871"> +1-718-909-3871 </a> |     
                    <a className='menu' href="mailto:mrexr2022@gmail.com"> mrexr2022@gmail.com </a> | 
                    <a className='menu' target='_blank' href="https://www.linkedin.com/in/elijah-rooney-b9701b14a/"> LinkedIn </a> </b></p>
                </div>
            </div>
            <div class="row" className='subHeader-row'>
                <div class="row" className='titleBox'>       
                    
                </div>
            </div>
        </>
    )
}

export default About