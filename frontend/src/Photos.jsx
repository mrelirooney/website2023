import React,{useState, useEffect} from 'react'
import { FaTimes, FaChevronRight, FaChevronLeft } from "react-icons/fa"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
/* NYC Photos */
import nycPhoto00 from "./photos/IMG_3961.jpg"
import nycPhoto01 from "./photos/IMG_9287.jpg"
import nycPhoto02 from "./photos/IMG_5787.jpg"
import nycPhoto03 from "./photos/IMG_2175-1.jpg"
import nycPhoto04 from "./photos/IMG_3938.png"
import nycPhoto05 from "./photos/IMG_3939.png"
import nycPhoto06 from "./photos/IMG_3941.png"
import nycPhoto07 from "./photos/IMG_3940.png"
import nycPhoto08 from "./photos/IMG_1932.jpg"
import nycPhoto09 from "./photos/IMG_1984.jpg"
import nycPhoto10 from "./photos/IMG_0993.jpg"
import nycPhoto11 from "./photos/IMG_3518.jpg"
import nycPhoto12 from "./photos/IMG_5849.jpg"
/* RGB Photos */
import rbgPhoto00 from "./photos/IMG_0207.jpg"
import rbgPhoto01 from "./photos/IMG_0226.jpg"
import rbgPhoto02 from "./photos/IMG_0354.jpg"
import rbgPhoto03 from "./photos/IMG_0970.jpg"
import rbgPhoto04 from "./photos/IMG_4224.jpg"
import rbgPhoto05 from "./photos/IMG_4833.jpg"
import rbgPhoto06 from "./photos/IMG_5091.jpg"
import rbgPhoto07 from "./photos/IMG_6286.jpg"
import rbgPhoto08 from "./photos/IMG_8221.jpg"
import rbgPhoto09 from "./photos/IMG_0221-2.jpg"
import rbgPhoto10 from "./photos/IMG_4209.jpg"
import rbgPhoto11 from "./photos/IMG_5112.jpg"

/* Travel Photos - add these later lol */

const imagesNYC = [
    nycPhoto05,
    nycPhoto02,
    nycPhoto01,
    nycPhoto06,
    nycPhoto04,
    nycPhoto00,
    nycPhoto11,
    nycPhoto07,
    nycPhoto08,
    nycPhoto03,
    nycPhoto10,
    nycPhoto09,
    nycPhoto12,
]

const imagesRBG = [
    rbgPhoto00,
    rbgPhoto01,
    rbgPhoto02,
    rbgPhoto03,
    rbgPhoto04,
    rbgPhoto05,
    rbgPhoto06,
    rbgPhoto07,
    rbgPhoto08,
    rbgPhoto09,
    rbgPhoto10,
    rbgPhoto11,
]

const Photos = () => {


    {/* functionality for the nyc photos */}
    const [data, setData] = useState({img: '', i: 0})
    const viewImage = (img, i)=>{
        setData({img, i})
    }
    const imgAction = (action) =>{
        let i = data.i;
        if (action === 'next-img-nyc'){
            setData({img: imagesNYC[i + 1], i: i + 1});
        }
        if (action === 'prev-img-nyc'){
            setData({img: imagesNYC[i - 1], i: i - 1});
        }
        if (!action){
            setData({img: '', i: 0});
        }
    }

    {/* functionality for the rbg photos */}
    const [data01, setData01] = useState({img01: '', j: 0})
    const viewImage01 = (img01, j)=>{
        setData01({img01, j})
    }
    const imgAction01 = (action01) =>{
        let j = data01.j;
        if (action01 === 'next-img-rbg'){
            setData01({img01: imagesRBG[j + 1], j: j + 1});
        }
        if (action01 === 'prev-img-rbg'){
            setData01({img01: imagesRBG[j - 1], j: j - 1});
        }
        if (!action01){
            setData01({img01: '', j: 0});
        }
    }

   
    return (
        <>

            {/* "modals" for the nyc photos */}
            {data.img &&
                <div className='pic-modal'>
                    <button onClick={() => imgAction()} className="bigPictureX">
                        <FaTimes />
                    </button>
                    <button onClick={() => imgAction('prev-img-nyc')} className="leftArrow">
                        <FaChevronLeft />
                    </button>
                    <button onClick={() => imgAction('next-img-nyc')} className="rightArrow">
                        <FaChevronRight />
                    </button>

                    <img className="bigPicture" src={data.img} />
                </div>
            }

            {/* "modals" for the rbg photos */}
            {data01.img01 &&
                <div className='pic-modal'>
                    <button onClick={() => imgAction01()} className="bigPictureX">
                        <FaTimes />
                    </button>
                    <button onClick={() => imgAction01('prev-img-rbg')} className="leftArrow">
                        <FaChevronLeft />
                    </button>
                    <button onClick={() => imgAction01('next-img-rbg')} className="rightArrow">
                        <FaChevronRight />
                    </button>
                    <img className="bigPicture" src={data01.img01} />
                </div>
            }

            {/* Hero Banner */}
            <div class="container-fluid" className="HeroContain-photos">
                <div class="row">
                    <div class="row" className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                        <div class="row" className='Banner'>
                            <div class="row" className='titleBox'>
                                <h4 className='title01'>A PICTURE IS WORTH</h4>
                                <h1 className='title00'>1000 WORDS</h1>
                            </div>
                            <div class="row" className='titleBox'>
                                <h4 className='title01'>AND THIS PAGE IS WORTH A BILLION</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* NYC Photos Section */}
            <div class="row" className='subHeader-row'>
                <div class="row" className='titleBox'>       
                    <h1 className='title00'>NYC PHOTOS</h1>    
                    <h4 className='title01'>THE BIG APPLE IS SO PHOTOGENIC</h4>
                </div>
            </div>
            <div class="row container-resume">

            <div className='container-photos' id="tablet-laptop">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 3, 900: 5}}
                >
                    <Masonry gutter='15px'>
                        {imagesNYC.map((image, i) => (
                            <img className="mason"
                        
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", cursor: "pointer", border: ".1px lightgrey solid"}}
                            alt=""
                            onClick={()=>viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            <div className='container-photos' id="phones">
                <div className='row'>
                    <div className='col-xs-12'>
                        <img className='photosOnPhone' src={nycPhoto05}/>
                    </div>
                </div>
            </div>
            {/* RGB Photos Section */}
            <div class="row" className='subHeader-row'>
                <div class="row" className='titleBox'>
                    <h1 className='title00'>RGB PORTRAITS</h1>    
                    <h4 className='title01'>WHEN THE SUN GOES DOWN, THE LIGHTS TURN ON</h4>
                </div>
            </div>
            <div className='container-photos'>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 3, 900: 5}}
                >
                    <Masonry gutter='15px'>
                        {imagesRBG.map((image01, j) => (
                            <img className="mason"
                            
                                key={j}
                                src={image01}
                                style={{width: "100%", display: "block", cursor: "pointer", border: ".1px lightgrey solid"}}
                                alt=""
                                onClick={()=>viewImage01(image01, j)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
                <br></br>
            </div>

        </div>

            
        </>
        
    )
}

export default Photos