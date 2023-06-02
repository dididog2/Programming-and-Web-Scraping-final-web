import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import MainPage from "./components/MainPage"
import BackGround from "./components/BackGround"
import dataOriginal from './data/data.json'
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(dataOriginal)

  return (
    <>
      <BackGround></BackGround>
      <Header dataOriginal={dataOriginal} setData={setData}></Header>
      <MainPage data={data}></MainPage>
    </>
  )
}

export default App
