import React from 'react'
import Tip from '../../Assets/icons/dica.svg?react'
import styles from './Projetos.module.css'
import Portfolio from '../../Assets/imagens/Projetos/on/samuelcazaes_on.png'
import PortfolioOFF from '../../Assets/imagens/Projetos/off/samuelcazaes_off.png'
import PortfolioMiniature from '../../Assets/imagens/Projetos/miniatures/portfoliominiature.jpg'
import AgileTrack from '../../Assets/imagens/Projetos/on/agiletrack_on.png'
import AgileTrackOFF from '../../Assets/imagens/Projetos/off/agiletrack_off.png'
import AgileTrackMiniature from '../../Assets/imagens/Projetos/miniatures/agiletrackminiature.jpg'
import VisiteQueluzito from '../../Assets/imagens/Projetos/on/visitequeluzito_on.png'
import VisiteQueluzitoOFF from '../../Assets/imagens/Projetos/off/visitequeluzito_off.png'
import VisiteQueluzitoMiniature from '../../Assets/imagens/Projetos/miniatures/visitequeluzitominiature.jpg'
import AmarilFranklin from '../../Assets/imagens/Projetos/on/amarilfranklin_on.png'
import AmarilFranklinOFF from '../../Assets/imagens/Projetos/off/amarilfranklin_off.png'
import AmarilFranklinMiniature from '../../Assets/imagens/Projetos/miniatures/amarilfranklinminiature.jpg'
import Setinha from '../../Assets/icons/seta_botao.svg?react'

const Projetos = () => {

  const [infoDisplay, setInfoDisplay] = React.useState('portfolio');

  return (
    <section className={`${styles.projetosBox} container`}>

        
      <div className={styles.leftBox}>
        <div className={styles.tipBox}>
        <Tip/>
        <span>clique nos projetos abaixo para saber mais sobre eles</span>
        </div>
        <div className={styles.projetosItemsBox}>
          <div onClick={() => setInfoDisplay('portfolio')} className={styles.projetosItem}>
            {infoDisplay === 'portfolio' ? 
              <h1 className={styles.selectedTitle}>portfólio</h1> : <h1>portfólio</h1>}
            {infoDisplay === 'portfolio' ? 
              <img className={styles.selected} src={Portfolio} alt="" /> : <img src={PortfolioOFF} alt="" />}            
          </div>
          <div onClick={() => setInfoDisplay('agileTrack')} className={styles.projetosItem}>
            {infoDisplay === 'agileTrack' ?
              <h1 className={styles.selectedTitle}>agile track</h1> : <h1>agile track</h1>}
            {infoDisplay === 'agileTrack' ? 
              <img  className={styles.selected} src={AgileTrack} alt="" /> : <img src={AgileTrackOFF} alt="" />} 
          </div>
          <div onClick={() => setInfoDisplay('visiteQueluzito')} className={styles.projetosItem}>
            {infoDisplay === 'visiteQueluzito' ? 
              <h1 className={styles.selectedTitle}>visite queluzito</h1> : <h1>visite queluzito</h1>}
            {infoDisplay === 'visiteQueluzito' ?
              <img  className={styles.selected} src={VisiteQueluzito} alt="" /> : <img src={VisiteQueluzitoOFF} alt="" />}
          </div>
          <div onClick={() => setInfoDisplay('amarilFranklin')} className={styles.projetosItem}>
          {infoDisplay === 'amarilFranklin' ? 
            <h1 className={styles.selectedTitle}>amaril franklin</h1> : <h1>amaril franklin</h1>}
          {infoDisplay === 'amarilFranklin' ?
            <img className={styles.selected} src={AmarilFranklin} alt="" /> : <img src={AmarilFranklinOFF} alt="" />}          
          </div>
        </div>
      </div>
      
      <div className={styles.rightBox}>
        <div className={styles.detailsBox}>
          <h1 className={styles.detailsProjetosTitle}>projetos<span>.</span></h1>
        </div>
        <div className={styles.miniatureBox}>
          {infoDisplay === 'portfolio' ? <img key={Math.random()} src={PortfolioMiniature} alt="" />
          : infoDisplay === 'agileTrack' ? <img key={Math.random()} src={AgileTrackMiniature} alt="" />
          : infoDisplay === 'visiteQueluzito' ? <img key={Math.random()} src={VisiteQueluzitoMiniature} alt="" />
          : infoDisplay === 'amarilFranklin' && <img key={Math.random()} src={AmarilFranklinMiniature} alt="" />
          }
          
        </div>

        <div className={styles.textBox}>         
          {infoDisplay === 'portfolio' ? <h2 key={Math.random()}>Portfólio</h2> 
          : infoDisplay === 'agileTrack' ? <h2 key={Math.random()}>Agile Track</h2>
          : infoDisplay === 'visiteQueluzito' ? <h2 key={Math.random()}>Visite Queluzito</h2>
          : infoDisplay === 'amarilFranklin' && <h2 key={Math.random()}>Amaril Franklin</h2>
          }
          {infoDisplay === 'portfolio' ? 
            <div key={Math.random()} className={styles.descriptions}>
              <p>O projeto portfólio consiste em ser como um currículo virtual para o desenvolvedor,descrevendo habilidades e as comprovando por meio de uma lista de projetos aqui demonstrados,possibilitando o visitante saber qual fora a participação deste programador nos projetos mencionados com apenas um clique.
              </p>
              <p>Este site foi projetado desde o começo visando a excelência, sendo assim ferramentas como o Figma foram necessárias para a prototipação e UI/UX, enquanto sua codificação fora feita em ReactJS e Git para versionamento, aplicando os conhecimentos adquiridos nos cursos concluídos.
              </p>
            </div> 
          : infoDisplay === 'agileTrack' ?
            <div key={Math.random()} className={styles.descriptions}>
              <p>O projeto Agile Track consiste em ser como um currículo virtual para o desenvolvedor,descrevendo habilidades e as comprovando por meio de uma lista de projetos aqui demonstrados,possibilitando o visitante saber qual fora a participação deste programador nos projetos mencionados com apenas um clique.
              </p>
              <p>Este site foi projetado desde o começo visando a excelência, sendo assim ferramentas como o Figma foram necessárias para a prototipação e UI/UX, enquanto sua codificação fora feita em ReactJS e Git para versionamento, aplicando os conhecimentos adquiridos nos cursos concluídos.
              </p>
            </div> 
          : infoDisplay === 'visiteQueluzito' ?
            <div key={Math.random()} className={styles.descriptions}>
              <p>O projeto Visite Queluzito consiste em ser como um currículo virtual para o desenvolvedor,descrevendo habilidades e as comprovando por meio de uma lista de projetos aqui demonstrados,possibilitando o visitante saber qual fora a participação deste programador nos projetos mencionados com apenas um clique.
              </p>
              <p>Este site foi projetado desde o começo visando a excelência, sendo assim ferramentas como o Figma foram necessárias para a prototipação e UI/UX, enquanto sua codificação fora feita em ReactJS e Git para versionamento, aplicando os conhecimentos adquiridos nos cursos concluídos.
              </p>
            </div> 
          : infoDisplay === 'amarilFranklin' &&
            <div key={Math.random()} className={styles.descriptions}>
              <p>O projeto Amaril Franklin consiste em ser como um currículo virtual para o desenvolvedor,descrevendo habilidades e as comprovando por meio de uma lista de projetos aqui demonstrados,possibilitando o visitante saber qual fora a participação deste programador nos projetos mencionados com apenas um clique.
              </p>
              <p>Este site foi projetado desde o começo visando a excelência, sendo assim ferramentas como o Figma foram necessárias para a prototipação e UI/UX, enquanto sua codificação fora feita em ReactJS e Git para versionamento, aplicando os conhecimentos adquiridos nos cursos concluídos.
              </p>
            </div>}
        </div>        
        <a href="">
          <div className={styles.button}>
            <span>SAIBA MAIS</span><Setinha/>
          </div>
        </a>
      </div>


    </section>
  )
}

export default Projetos