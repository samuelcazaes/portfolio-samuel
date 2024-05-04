import React from 'react'
import Header from './Components/header/Header.jsx'
import './App.css'
import Sobre from './Components/sobre/Sobre.jsx'
import Footer from './Components/footer/Footer.jsx'
import Habilidades from './Components/habilidades/Habilidades.jsx'
import Projetos from './Components/projetos/Projetos.jsx'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <main className='AppBody'>
        <Sobre/>
        <Habilidades/>
        <Projetos/>
      </main>
      <Footer/>
    </div>
  )
}

export default App