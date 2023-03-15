
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
        <Header />
        
            <Routes></Routes> 
            
                       
        <Footer />
    </BrowserRouter>
  );
}
export default App;
