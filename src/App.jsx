import { Suspense } from 'react'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import renderRoutes from './routes'
import Cubes from './pages/Cubes'

function App() {

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
