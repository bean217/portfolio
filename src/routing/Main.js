import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Experience from '../pages/Experience/Experience';
import Extra from '../pages/Extra/Extra';
import Github from '../pages/Github/Github';

const Main = () => {
  return (
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
      <Route exact path='/' component={About}></Route>
      <Route exact path='/projects' component={Projects}></Route>
      <Route exact path='/experience' component={Experience}></Route>
      <Route exact path='/extra' component={Extra}></Route>
      <Route exact path='/github' component={Github}></Route>
    </Routes>
  );
}

export default Main;