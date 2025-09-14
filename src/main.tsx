// Polyfill for Array.prototype.toSorted
if (!Array.prototype.toSorted) {
  // @ts-ignore
  Array.prototype.toSorted = function(compareFn?: (a:any,b:any)=>number) {
    return Array.prototype.slice.call(this).sort(compareFn);
  };
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
