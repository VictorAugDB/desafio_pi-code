import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from './hooks/toast';

import Routes from './routes';
import GlobalStyle from './styles/global';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App;
