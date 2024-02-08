  import React, { useRef } from 'react';
  import "./assets/styles/theme.css";
  import { ThemeProvider } from '@mui/material/styles';
  import MainContent from "./components/MainContent";
  import Contact from './components/Contact';
  import About from './components/About';
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import theme from "./assets/styles/theme";
  import Wrapper from './components/Wrapper';
  import CreateNote from './components/CreateNote';
  import Notes from './components/Notes';
  import Portfolio from './components/Portfolio';
  import PortfolioItem from './components/PortfolioItem';
  import "slick-carousel/slick/slick.css"; 
  import "slick-carousel/slick/slick-theme.css";
  
  function App() {
    return (
      <Wrapper>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolioitem" element={<PortfolioItem />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/createnote" element={<CreateNote />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<MainContent />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </Wrapper>
    );
  }

  export default App;
