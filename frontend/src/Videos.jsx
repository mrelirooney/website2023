import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'

/* Videos */
import vidHeroVideo from './videos/videoPageHero.mp4'
import HailStorm from './videos/Hailstorm-final.mp4'
import CompLovin from './videos/CompLoving.mp4'
import RLP2vid from './videos/FirstTrailer-060223.mp4'
import shorts00 from './videos/TikTokReels98.mp4'
import shorts01 from './videos/TikTokReels99.mp4'
import shorts02 from './videos/TikTokReels104.mp4'
import shorts03 from './videos/TikTokReels113.mp4'
import shorts04 from './videos/TikTokReels117.mp4'
import shorts05 from './videos/CCExMeetup-072223.mp4'

/* Thumbnails */
import HailStormPic from "./photos/thumbnails/HailStorm01.png"
import CompLovingPic from "./photos/thumbnails/CompLovin.png"
import RLP2pic from "./photos/thumbnails/RLP2.png"
import noVid01 from "./photos/VideoNoVideo.png"

const Videos = () => {
    return (
        <>
            {/* Hero Banner */}
            <div class="container-fluid" className="HeroContain-videos">
                
                    <div class="row" className='videoBanner'>
                    
                        <video className="vidHeroBg" src={vidHeroVideo} autoPlay loop muted poster={noVid01}></video>
                        <div class="row" className='vidHeroMask'>
                        
                        <div class="row" className='Banner'>
                            <div class="row" className='titleBox'>
                                <h4 className='title01'>HEY, CAN I SHOW YOU</h4>
                                <h1 className='title00'>SOMETHING COOL?</h1>
                            </div>
                            <div class="row" className='titleBox'>
                                <h4 className='title01'>IN 30 FRAMES PER SECOND</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Landscape Videos Section */}
            <div class="row" className='subHeader-row'>
                <div class="row" className='titleBox'>       
                    <h1 className='title00'>SKIT VIDEOS</h1>    
                    <h4 className='title01'>I LOVE TO TELL A GOOD STORY</h4>
                </div>
            </div>
            <div class="row container-videos">
                <div className='col-sm-12 col-md-12 col-lg-6 col-xl-8 videoBox'>
                    <Video poster={HailStormPic}>
                        <source src={HailStorm} type='video/webm' />
                    </Video>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 col-xl-4'>
                    <div class="row" className='titleBox'> 
                        <h1 className='title00'>HAILSTORM</h1>    
                        <h4 className='title01'>DESTROYED MY ROOM</h4>
                    </div>
                    <br></br>
                    <h4 className='description'>One winter day, I was minding my business, watching viviaracelicaniza on TikTok. When all of a sudden, a random hail storm breaks out and breaks into my room. This storm is violent, overly dramatic, and spontaneous; thus posing as my biggest challenge so far.</h4>
                    <p className='description-fine'>THIS VIDEO WAS FILMED WITH A CANON 6D MARK II AND EDITED WITH BLENDER, ADOBE AFTER EFFECTS, AND ADOBE PREMIERE PRO</p>
                    
                </div>
            </div>
            <div class="row" className='subHeader-row'>
                <div class="row" className='titleBox'>       
                </div>
            </div>
            <div class="row container-videos">
                <div className='col-sm-12 col-md-12 col-lg-6 col-xl-8 videoBox'>
                    <Video poster={CompLovingPic}>
                        <source src={CompLovin} type='video/webm' />
                    </Video>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 col-xl-4'>
                    <div class="row" className='titleBox'> 
                        <h1 className='title00'>COMP LOVE</h1>    
                        <h4 className='title01'>BY MALIK POLLUX</h4>
                    </div>
                    <br></br>
                    <h4 className='description'>Enter the Computerized Loving music video for the first time ever! Malik Pollux not only made a great song to vibe to, but also a new way to experience it! Put on your headphones and enjoy the video!</h4>
                    <p className='description-fine'>THIS VIDEO WAS FILMED WITH A CANON 6D MARK II AND EDITED WITH ADOBE AFTER EFFECTS AND ADOBE PREMIERE PRO</p>
                    
                </div>
            </div>
            <div class="row" className='subHeader-row'>
                <div class="row" className='titleBox'>       
                </div>
            </div>
            <div class="row container-videos">
                <div className='col-sm-12 col-md-12 col-lg-6 col-xl-8 videoBox'>
                    <Video poster={RLP2pic}>
                        <source src={RLP2vid}  type='video/webm' />
                    </Video>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 col-xl-4'>
                    <div class="row" className='titleBox'> 
                        <h1 className='title00'>RLP2</h1>    
                        <h4 className='title01'>COMING SOON</h4>
                    </div>
                    <br></br>
                    <h4 className='description'>In Real Life Photoshop 2, I find it challenging to conduct a decent photoshoot for the model, Carlill. With the help of my friend, Isaiah, we provide the coolest photoshoot expierence ever! Stay tuned to know how this photoshoot goes in October 2023 </h4>
                    <p className='description-fine'>THIS VIDEO WAS FILMED WITH A CANON 6D MARK II AND EDITED WITH BLENDER, ADOBE AFTER EFFECTS, AND ADOBE PREMIERE PRO</p>
                    
                </div>
            </div>
            {/* Portrait Videos Section */}
            <div class="row" className='subHeader-row'>
                <div class="row" className='titleBox'>       
                    <h1 className='title00'>SHORT VIDEOS</h1>    
                    <h4 className='title01'>WHERE SCIENCE FICTION AND ART COLLIDE</h4>
                </div>
            </div>
            <div class="row container-videos">
                <div className='col-xs-12 col-sm-4 videoBox'>
                    <Video className=".row shorts">
                        <source src={shorts00} type='video/webm' />
                    </Video>
                </div>
                <div className='col-xs-12 col-sm-4 videoBox'>
                    <Video className=".row shorts">
                        <source src={shorts01} type='video/webm' />
                    </Video>
                </div>
                <div className='col-xs-12 col-sm-4 videoBox'>
                    <Video className=".row shorts">
                        <source src={shorts02} type='video/webm' />
                    </Video>
                </div>  
            </div>
            <div class="row" className='subHeader-row-01'>
                <div class="row" className='titleBox'>       
                </div>
            </div>
            <div class="row container-videos">
                <div className='col-xs-12 col-sm-4 videoBox'>
                    <Video loop className=".row shorts">
                        <source src={shorts03} type='video/webm' />
                    </Video>
                </div>
                <div className='col-xs-12 col-sm-4 videoBox'>
                    <Video loop className=".row shorts">
                        <source src={shorts04} type='video/webm' />
                    </Video>
                </div>
                <div className='col-xs-12 col-sm-4 videoBox'>
                    <Video loop className=".row shorts">
                        <source src={shorts05} type='video/webm' />
                    </Video>
                </div>
            </div>
            <div class="row" className='subHeader-row'>
                <div class="row" className='titleBox'>       
                </div>
            </div>
        </>
    )
}

export default Videos