

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'


import App from './App.tsx'

const rootElement = document.getElementById('hor-booking-engine');
// const scriptTag = Array.from(document.querySelectorAll('script[src$=".js"]'))
//   .find((el) => el.hasAttribute('data-property'));
// const dataProperty = scriptTag?.getAttribute('data-property') || null;
const dataProperty = '240757'

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App propertyId={dataProperty} />
    </StrictMode>
  );
}

