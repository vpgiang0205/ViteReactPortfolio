import { Suspense, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import renderRoutes from './routes'
import Cubes from './pages/Cubes'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <>
      <Cubes />

      <Suspense fallback={<>Loading...</>}>
        <BrowserRouter>
          <Routes>
            {renderRoutes()}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
