import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='theFooter'>
            <div class="row">
            <div className="navFooter" class="col-xs-6 col-sm-6">
                    <h4 className='title01'><Link className='menu' to={"/"}>Home</Link></h4>              
                    <h4 className='title01'><Link className='menu' to={"/resume"}>Resume</Link></h4>        
                    <h4 className='title01'><Link className='menu' to={"/photos"}>Photos</Link></h4>
                    <h4 className='title01'><Link className='menu' to={"/videos"}>Videos</Link></h4>
                    <h4 className='title01'><Link className='menu' to={"/about"}>About Me</Link></h4>
                </div>
                <div className="contactFooter" class="col-xs-6 col-sm-6">
                    <h4 className='title01'>Contact Me:</h4>              
                    <h4 className='title01'><a className='menu' href="tel:7189093871">+1-718-909-3871</a></h4>        
                    <h4 className='title01'><a className='menu' href="mailto:mrexr2022@gmail.com">mrexr2022@gmail.com</a></h4>
                    <h4 className='title01'><a className='menu' target='_blank' href="https://www.linkedin.com/in/elijah-rooney-b9701b14a/">LinkedIn</a></h4>
                </div>
            </div>
            <div class="row">
                <p className='finePrint'>THIS WEBSITE WAS CODED BY ELIJAH ROONEY &copy; JULY 2023</p>
                <p className='finePrint'>THIS WEBSITE WAS CODED IN VISUAL STUDIO CODE AND IS HOSTED ON AWS S3</p>
            </div>
        </div>
    )
}

export default Footer;