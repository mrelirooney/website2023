import React, { useEffect, useState } from "react";
import axios from 'axios';

/* Images */
import ET from "./photos/EricThomas-Square.png"

function Tgims(){
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Fetch data from an API
        axios.get('http://127.0.0.1:8000/tgims/')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleNextEntry = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    return (
        <>
            <div class="row container-resume">
                <div className='col-sm-12 col-lg-4'>
                    <img src={ET} className='aboutImages'/>
                </div>
                <div className='col-sm-12 col-lg-8'>
                    <h1 className='title00' style={{paddingBottom:"20px"}}>Thank God It's Monday</h1>
                    <p className='description'><b>TGIM is more than just an acronym, it's a mentality</b>. 
                    Many people hate Monday because it's the start of the work or school week. <b>Eric Thomas </b>  
                    noticed this over a decade ago and decided to shead some positivity on the least favorite
                    day of the week. He started chanting <b>"BRING IT FROM THE BOTTOM! THANK GOD IT'S MONDAY!"</b> on
                    YouTube. He believes that Monday is a powerful start of a productive week. The start, or even the
                    continuation, of a fitness journey, hobby, new skill, work project, school assignment, and 
                    much more. I too used to dread Mondays, even Sunday nights. But ever since I adopted Eric's 
                    mentality, I've been much more encouraged, motivated, and positive on Mondays.
                    </p>
                    <p className='description' id="mobile-queue" style={{textAlign:"center", border: "1px rgb(239, 239, 239) solid", padding: "10px", marginTop:"5px"}}> Tap the message to change it!
                    </p>
                    <p className='description' id="laptop-queue" style={{textAlign:"center", border: "1px rgb(239, 239, 239) solid", padding: "10px", marginTop:"5px"}}> Click the message to change it!
                    </p>
                    <div>
                        {/* Display fetched data */}
                        {data.length > 0 && (
                            <div onClick={handleNextEntry} style={{cursor:"pointer"}}>
                                <br></br>
                                <h3 className="title00" style={{lineHeight:"1.1em"}}>"{data[currentIndex].title}"</h3>
                                <h4 className="title01">"{data[currentIndex].description}"</h4>
                                <br></br>
                            </div>
                        )}
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

export default Tgims