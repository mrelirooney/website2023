import React, {lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Resume = lazy(() => import('./Resume'));
const Photos = lazy(() => import('./Photos'));
const Videos = lazy(() => import('./Videos'));
const Navbar = lazy(() => import('./Navbar'));

function Routers() {
    return (
      <div className="Routers">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/photos" element={<Photos/>}/>
          <Route path="/videos" element={<Videos/>}/>
        </Routes>
      </div>
    );
  }
  
  export default Routers;