import React from 'react';
import './custom.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landingpage from './Components/Landingpage/Landingpage';
import Header from './Components/Header/Header';
import UploadPage from './Components/Upload/UploadPage';



function App() {
  return (
    <Router>
      <div className="siteWrapper bg-black">

      <Header />

      <Route exact path="/" component={Landingpage} />






      <Route path="/upload" component={UploadPage} />

      </div>
    </Router>
  );
}

export default App;
