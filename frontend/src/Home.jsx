import React from 'react'
import { Link } from 'react-router-dom'
import Tgims from './Tgims';


const Home = () => { 
    window.scrollTo(0, 0);

    const scroll2Top = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      };
    return (

        <>
            {/* Hero Banner */}
            < div class="container-fluid" className="HeroContain">
                <div class="row">
                    <div class="row" className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                        <div class="row" className='Banner'>
                            <div class="row" className='titleBox'>
                                <h4 className='title01'>WELCOME TO THE PORTFOLIO WEBSITE OF</h4>
                                <h1 className='title00'>ELIJAH ROONEY</h1>
                            </div>
                            <div class="row" className='titleBox'>
                                <h4 className='title01'>CHECK OUT MY RESUME</h4>
                                <button type="button" className="callToAction">
                                
                                    <Link onClick={() => scroll2Top()} className='menu' to={"/resume"}>
                                        <h4 className='buttonTitle'>CODING RESUME</h4>
                                    </Link>
                                    
                                </button>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* TGIMs */}
            <div class="row" className='subHeader-row'>
                <div class="row" className='titleBox'>       
                    <Tgims />
                </div>
            </div>
            {/* Panel Banner */}
            <div class="container-fluid">
                
                < div class="row">
                    <Link onClick={() => scroll2Top()} className='menu' class="col-sm-6 panelCol" to={"/resume"}>
                        <div class="row panelTitle" id='resumePanel'>
                            <h1 className='title00'>RESUME</h1>
                        </div>
                    </Link>
                    <Link onClick={() => scroll2Top()} className='menu' class="col-sm-6 panelCol" to={"/about"}>
                        <div class="row panelTitle" id='aboutPanel'>
                            <h1 className='title00'>ABOUT ME</h1>
                        </div>
                    </Link>
                    <Link onClick={() => scroll2Top()} className='menu' class="col-sm-6 panelCol" to={"/photos"}>    
                        <div class="row panelTitle" id='photosPanel'>
                            <h1 className='title00'>PHOTOS</h1>
                        </div>
                    </Link>
                    
                    <Link onClick={() => scroll2Top()} className='menu' class="col-sm-6 panelCol" to={"/videos"}>
                        <div class="row panelTitle" id='videosPanel'>
                            <h1 className='title00'>VIDEOS</h1>
                        </div>
                    </Link>
                </div>
                
            </div>
            
        </>
    )
}


export default Home