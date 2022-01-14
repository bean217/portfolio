import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Experience from '../pages/Experience/Experience';
import Extra from '../pages/Extra/Extra';

const Main = () => {
  // Fetching Scroll Position
  const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
      <Route path='/' element={<About scrollPosition={scrollPosition} />}></Route>
      <Route path='/projects' element={<Projects scrollPosition={scrollPosition} />}></Route>
      <Route path='/experience' element={<Experience scrollPosition={scrollPosition} />}></Route>
      <Route path='/extra' element={<Extra scrollPosition={scrollPosition} />}></Route>
    </Routes>
  );
}

export default Main;