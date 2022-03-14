import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from '../src/components/Hero/index';
import Products from './components/products';
import { productData, productDataTwo } from './components/products/data';
import Feature from '../src/components/Feature/index';
import Footer from '../src/components/Footer/index'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite Bikes' data={productData} />
      <Feature />
      <Products heading='Helmets for saftey' data={productDataTwo} />
      <Footer />
     
    </Router>
  );
}

export default App;