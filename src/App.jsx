import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'

// Import pages
import Dashboard from './pages/Dashboard'
import LeaderBoard from './pages/Leaderboard'
import NotFound from './pages/NotFound'
import Game from  './pages/Game'

//Import Navbar
import NavBar from './components/NavigationBar/NavBar'




function App() {
 
  

  

  return (
    <>
    
    <main className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Dashboard />} /> 
        <Route path="/game" element={ <Game />}/>
        <Route path="/leaderboard" element={ <LeaderBoard />}/>
        <Route path="*" element={ <NotFound />}/>
      </Routes> 
      
      </main>
    </>
  )
}

export default App
