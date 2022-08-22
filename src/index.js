import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './Components/Contexts/SearchContext';

import jobInput from './Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchProvider jobInput={jobInput}>
      <App />
    </SearchProvider>
  </React.StrictMode>
);
