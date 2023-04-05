import { useState } from 'react'
import './App.css'
import {HomeScreen} from './HomeScreen'
import {LoginScreen} from './LoginScreen'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/login' element={<LoginScreen/>}/>
          </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
