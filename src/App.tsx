import React from 'react';
import './main.css';
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from './routes/BrowseRoutes';

const App :React.FC = () => {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
