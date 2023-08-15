import React from 'react'
import { Link } from 'react-router-dom';
import profilePic from './photos/IMG_8394-CloseUp.png';
import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from "react";
import "./styles/home.scss"

function Navbar () {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <div className='logo'>
                <Link className='menu' to={"/"}>
                    <img className='profilePic' src={profilePic} alt="ER" />
                </Link>
            </div>
            <nav ref={navRef}>            
                <div className='display-menu'>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
                <img className='profilePic-hidden' src={profilePic} alt="ER" />
                    <Link className='menu' to={"/"}>HOME</Link>
                    <Link className='menu' to={"/resume"}>RESUME</Link>
                    <Link className='menu' to={"/photos"}>PHOTOS</Link>
                    <Link className='menu' to={"/videos"}>VIDEOS</Link>
                    <Link className='menu' to={"/about"}>ABOUT</Link>
                </div>
                
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar;