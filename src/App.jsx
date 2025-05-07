import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { 
  Home,
  Create 
} from "./pages/exportpages"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="Pages px-60 py-14">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<Create />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
