import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Experience from '../pages/Experience/Experience';
import Extra from '../pages/Extra/Extra';

const Main = () => {
  return (
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
      <Route path='/' element={<About />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/experience' element={<Experience />}></Route>
      <Route path='/extra' element={<Extra />}></Route>
    </Routes>
  );
}

export default Main;