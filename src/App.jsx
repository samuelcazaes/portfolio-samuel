import React, { useRef } from 'react'
import Header from './Components/header/Header.jsx'
import './App.css'
import Sobre from './Components/sobre/Sobre.jsx'
import Footer from './Components/footer/Footer.jsx'
import Habilidades from './Components/habilidades/Habilidades.jsx'
import Projetos from './Components/projetos/Projetos.jsx'
import Experiencias from './Components/experiencias/Experiencias.jsx'
import Formacoes from './Components/formacoes/Formacoes.jsx'
import Scroll from './Components/scroll/Scroll.jsx'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <main className='AppBody'>
        <Sobre/>
        <Habilidades/>
        <Projetos/>
        <Experiencias/>
        <Formacoes/>
        <Scroll/>
      </main>
      <Footer/>
    </div>
  )
}

export default App