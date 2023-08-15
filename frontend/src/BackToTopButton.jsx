import React from "react";
import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa"

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 250 ) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div className="App">
        {backToTopButton && (
            <button onClick={scrollUp} className="topButton"><FaChevronUp/></button>
        )}
    </div>
  );
}

export default BackToTopButton;