import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
// Import pages
import Dashboard from './components/Dashboard'
import LeaderBoard from './components/Leaderboard'
import NotFound from './components/NotFound'
import Game from  './components/Game'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={ <Dashboard />} /> 
        <Route path="/game" element={ <Game />}/>
        <Route path="/leaderboard" element={ <LeaderBoard />}/>
        <Route path="*" element={ <NotFound />}/>
      </Routes> 
    </>
  )
}

export default App
