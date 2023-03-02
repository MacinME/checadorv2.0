import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FirstRouter } from './FirstRouter';
import './index.css';

const divRoot = document.querySelector("#root");
const root = createRoot(divRoot);

root.render(
  <React.StrictMode>
    <BrowserRouter >
      <FirstRouter />
    </BrowserRouter>
  </React.StrictMode>,
)

