import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import NotFoundErrorPage from './Components/ErrorPage';
import CompanyMaster from './Components/CompanyMaster';
import ItemMaster from './Components/ItemMaster';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Default Route */}
          <Route path='/' element={<Menu />} />
          {/* Component routes */}
          <Route path='item-master' element={<ItemMaster itemList={["Item1", "Item2", "Item3", "Item4"]} />} />
          <Route path='company-master' element={<CompanyMaster />} />

          {/* Error page route */}
          <Route path='*' element={<NotFoundErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
