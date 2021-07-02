import { useState } from 'react';

import Topbar from './components/topbar/topbar';
import Testimonials from './components/testimonials/testimonials';
import Portfolio from './components/portfolio/portfolio';
import Works from './components/works/works';
import Contact from './components/contact/contact';

import './app.scss';
import Menu from './components/menu/menu';
import Intro from './components/intro/intro';

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="app">
      <Topbar onActiveChange={() => {setIsActive(!isActive)}}/>
      <Menu isActive={isActive}/>
      <div className="sections">
        <Intro/>
        <Works/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;
