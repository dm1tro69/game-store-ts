import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Header from "./components/header/Header";
import GamePage from "./pages/game-page/GamePage";
import OrderPage from "./pages/oredr-page/OrderPage";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/app/:title'} element={<GamePage/>}/>
        <Route path={'/order'} element={<OrderPage/>}/>
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
