import React from 'react';
import './App.css';
import LinkTree from './components/LinkTree';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-M9F8FE0BVD";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <LinkTree />
  );
}

export default App;