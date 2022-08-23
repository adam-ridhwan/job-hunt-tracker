import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './Components/Contexts/SearchContext';
import { SortProvider } from './Components/Contexts/SortContext';

import jobInput from './Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SortProvider>
      <SearchProvider jobInput={jobInput}>
        <App />
      </SearchProvider>
    </SortProvider>
  </React.StrictMode>
);
