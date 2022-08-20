import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './Components/Contexts/SearchContext';
import { StickProvider } from './Components/Contexts/StickyContext';
import jobInput from './Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StickProvider>
      <SearchProvider jobInput={jobInput}>
        <App />
      </SearchProvider>
    </StickProvider>
  </React.StrictMode>
);
