import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import NotFoundErrorPage from './Components/ErrorPage';
import CompanyMaster from './Components/CompanyMaster';
import ItemMaster from './Components/ItemMaster';

function App() {

  let userName: string = "John Doe";

  let menuList: string[] = ["Master", "Admin", "Home"];

  return (
    <div className="App">
      <h1>Welcome to react, {userName} </h1>
      <img src="" alt="" />
      <p>
        {
          5 + 5
        }
      </p>

      {/* <Menu /> */}
      {/* <hr />
      <h1>NotFoundErrorPage Component</h1> */}
      {/* <NotFoundErrorPage></NotFoundErrorPage> */}
      {/* <NotFoundErrorPage /> */}
      {/* <hr />
      <h1>Company master component</h1>
      <CompanyMaster />
      <hr />
      <h1>Item master component</h1> */}
      <ItemMaster itemList={["Item1", "Item2", "Item3", "Item4"]} ></ItemMaster>

    </div>
  );
}

export default App;
