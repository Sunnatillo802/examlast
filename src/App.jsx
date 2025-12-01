import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/header'
import Start from './components/starpup/start'
import Popular from './components/popular/popular'
import Cotegory from './components/category/cotegory'
import Footer from './components/footer/footer'
import Home from './pages/home'
import Blog from './pages/blog'
import About from './pages/about'
import Register from './pages/register'
import "./i18n";
import { Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
