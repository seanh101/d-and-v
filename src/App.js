import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

