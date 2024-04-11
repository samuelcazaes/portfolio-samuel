import React from 'react'
import Header from './Components/header/Header.jsx'
import './App.css'
import Sobre from './Components/sobre/Sobre.jsx'
import Footer from './Components/footer/Footer.jsx'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <main className='AppBody'>
        <Sobre/>
      </main>
      <Footer/>
    </div>
  )
}

export default App