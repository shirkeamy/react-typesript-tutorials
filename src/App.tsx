import React from 'react';
import './App.css';
import ItemMaster from './Components/ItemMaster';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import CompanyMaster from './Components/CompanyMaster';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="item-master" element={<ItemMaster itemList={["Item1", "Item2", "Item3", "Item4"]} />} />
          <Route path="company-master" element={<CompanyMaster />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
