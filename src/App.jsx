import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VideoComp from './components/VideoComp'
import Home from './components/Home'
import NotFound from './components/NotFound' // Import the new component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<VideoComp />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
