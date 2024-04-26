import React from 'react'
import Tip from '../../Assets/icons/dica.svg?react'
import styles from './Projetos.module.css'
import Portfolio from '../../Assets/imagens/Projetos/on/samuelcazaes_on.png'
import AgileTrack from '../../Assets/imagens/Projetos/on/agiletrack_on.png'
import VisiteQueluzito from '../../Assets/imagens/Projetos/on/visitequeluzito_on.png'
import AmarilFranklin from '../../Assets/imagens/Projetos/on/amarilfranklin_on.png'
import PortfolioMiniature from '../../Assets/imagens/Projetos/miniatura-projetos.jpg'
import Setinha from '../../Assets/icons/seta_botao.svg?react'
const Projetos = () => {
  return (
    <section className={`${styles.projetosBox} container`}>

        
      <div className={styles.leftBox}>

        <div className={styles.tipBox}>
        <Tip/>
        <span>clique nos projetos abaixo para saber mais sobre eles</span>
        </div>

        <div className={styles.projetosItemsBox}>
        <div className={styles.projetosItem}>
          <h1>portfólio</h1>
          <img src={Portfolio} alt="" />
        </div>
        <div className={styles.projetosItem}>
          <h1>agile track</h1>
          <img src={AgileTrack} alt="" />
        </div>
        <div className={styles.projetosItem}>
          <h1>visite queluzito</h1>
          <img src={VisiteQueluzito} alt="" />
        </div>
        <div className={styles.projetosItem}>
          <h1>amaril franklin</h1>
          <img src={AmarilFranklin} alt="" />
        </div>
        </div>
        
      </div>
      
      <div className={styles.rightBox}>
        <div className={styles.detailsBox}>
          <h1 className={styles.detailsProjetosTitle}>projetos<span>.</span></h1>
        </div>
        <div className={styles.miniatureBox}>
          <img src={PortfolioMiniature} alt="" />
        </div>
        <div className={styles.textBox}>
          <h2>Portfólio</h2>
          <div className={styles.descriptions}>
            <p>O projeto portfólio consiste em ser como um currículo virtual para o desenvolvedor,descrevendo habilidades e as comprovando por meio de uma lista de projetos aqui demonstrados,possibilitando o visitante saber qual fora a participação deste programador nos projetos mencionados com apenas um clique.
            </p>
            <p>Este site foi projetado desde o começo visando a excelência, sendo assim ferramentas como o Figma foram necessárias para a prototipação e UI/UX, enquanto sua codificação fora feita em ReactJS e Git para versionamento, aplicando os conhecimentos adquiridos nos cursos concluídos.
            </p>
          </div>
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