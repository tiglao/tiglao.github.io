import * as React from 'react';
import "./App.css";
import { ThemeProvider } from '@mui/material/styles';
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./assets/styles/theme";
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
              <Route path="/" element={<MainContent />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
