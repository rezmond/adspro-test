import { createRoot } from 'react-dom/client';

import { App } from './app';

const root = document.querySelector('#root');

if (!root) {
  throw new Error('There is no root element');
}

createRoot(root).render(<App />);
