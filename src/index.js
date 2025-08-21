import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import SquareBox from './components/SquareBox/SquareBox';
import ThemeProvider from './components/ContextExample/ThemeProvider';
import Home from './components/ContextExample/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SquareBox /> */}

    <ThemeProvider>
      <Home />
    </ThemeProvider>
    
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
