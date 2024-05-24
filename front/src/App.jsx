import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Vip from './pages/Vip';



function App() {
  const [connected, setConnected] = useState(false)
  const router = createBrowserRouter([
    {path: '', element:<Home connected={connected} setConnected={setConnected}/>},
    {path: '/login', element:<Login connected={connected} setConnected={setConnected}/>},
    {path: '/vip', element:<Vip connected={connected} setConnected={setConnected}/>},
    
  
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
