//import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div id="main-section">
      <Routes>
        <Route path="/posts" />   
        <Route path="/profile" />   
        <Route path="/login" />   
        <Route path="/register" />   
      </Routes>
    </div>
  )
}

export default App

