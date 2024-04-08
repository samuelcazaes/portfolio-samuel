import React from 'react'
import Header from '../components/header/Header.jsx'
import './App.css'
import Sobre from '../components/sobre/Sobre.jsx'
import Footer from '../components/footer/Footer.jsx'

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