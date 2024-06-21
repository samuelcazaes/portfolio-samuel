import React from 'react'
import styles from './Habilidades.module.css'
import CSharp from '../../Assets/logo/Habilidades/Back-end/csharp.svg?react'
import DBeaver from '../../Assets/logo/Habilidades/Back-end/dbeaver.svg?react'
import DotNet from '../../Assets/logo/Habilidades/Back-end/dotnet.svg?react'
import Kotlin from '../../Assets/logo/Habilidades/Back-end/kotlin.svg?react'
import MySql from '../../Assets/logo/Habilidades/Back-end/mysql.svg?react'
import Oracle from '../../Assets/logo/Habilidades/Back-end/oracle.svg?react'
import SqlServer from '../../Assets/logo/Habilidades/Back-end/sqlserver.svg?react'
import Html5 from '../../Assets/logo/Habilidades/Front-end/html.svg?react'
import Css3 from '../../Assets/logo/Habilidades/Front-end/css.svg?react'
import JavaScript from '../../Assets/logo/Habilidades/Front-end/javascript.svg?react'
import ReactJS from '../../Assets/logo/Habilidades/Front-end/react.svg?react'
import Azure from '../../Assets/logo/Habilidades/ui_ux_e_gerenciais/azure.svg?react'
import Canva from '../../Assets/logo/Habilidades/ui_ux_e_gerenciais/canva.svg?react'
import Discord from '../../Assets/logo/Habilidades/ui_ux_e_gerenciais/discord.svg?react'
import Figma from '../../Assets/logo/Habilidades/ui_ux_e_gerenciais/figma.svg?react'
import Github from '../../Assets/logo/Habilidades/ui_ux_e_gerenciais/github.svg?react'
import Trello from '../../Assets/logo/Habilidades/ui_ux_e_gerenciais/trello.svg?react'
import NextJs from '../../Assets/logo/Habilidades/Front-end/nextjs.svg?react'

const Habilidades = () => {
  return (
    <section id={'habilidades'} className={`${styles.habilidades} container`}>
      <h1 className={styles.titulo}>habilidades<span>.</span></h1>
      <div className={styles.boxesContainer}>
        <div className={`${styles.backEnd} ${styles.boxItem}`}>
          <h2 className={styles.subtitulo}>back-end</h2>
          <div className={styles.habilidadesContainer}>
            <div className={styles.habilidadesLineOne}>
              <div className={styles.habilidadeContainer}>
                <CSharp className={styles.habilidadeLogo}/>
              </div>
              <div className={styles.habilidadeContainer}>
                <DotNet className={styles.habilidadeLogo}/>
              </div>
              <div className={styles.habilidadeContainer}>
                <SqlServer className={styles.habilidadeLogo}/>
              </div>
              <div className={styles.habilidadeContainer}>
                <MySql className={styles.habilidadeLogo}/>
              </div>
            </div>
            <div className={styles.habilidadesLineTwo}>
              <div className={`${styles.habilidadeContainer} ${styles.oracleContainer}`}>
                <Oracle className={styles.habilidadeLogo}/>
              </div>
              <div className={`${styles.habilidadeContainer} ${styles.kotlinContainer}`}>
                <Kotlin className={styles.habilidadeLogo}/>
              </div>
              <div className={styles.habilidadeContainer}>
                <DBeaver className={styles.habilidadeLogo}/>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.frontEnd} ${styles.boxItem}`}>
          <h2 className={styles.subtitulo}>front-end</h2>
          <div className={styles.habilidadesContainer}>
            <div className={styles.habilidadesLineZero}>
              <div className={styles.habilidadeContainer}>
                <Html5 className={styles.habilidadeLogo}/>
              </div>
              <div className={styles.habilidadeContainer}>
                <Css3 className={styles.habilidadeLogo}/>
              </div>
              <div className={styles.habilidadeContainer}>
                <JavaScript className={styles.habilidadeLogo}/>
              </div>
              <div className={styles.habilidadeContainer}>
                <ReactJS className={styles.habilidadeLogo}/>
              </div>
            </div>  
            <div className={styles.habilidadesLineTwo}>
              <div className={`${styles.habilidadeContainer}`}>
                <NextJs className={styles.habilidadeLogo}/>
              </div>
            </div>        
          </div>
        </div>
      </div>

      <div className={styles.uiUxBoxesContainer}>
      <div className={`${styles.uiUx} ${styles.boxItem}`}>
          <h2 className={styles.uiUxSubtitulo}>ui/ux e gerenciais</h2>
          <div className={styles.habilidadesContainer}>
            <div className={styles.habilidadesLineOne}>
              <div className={styles.habilidadeContainer}>
                <Figma className={styles.habilidadeLogo}/>
              </div>
              <div className={`${styles.habilidadeContainer} ${styles.canvaContainer}`}>
                <Canva className={styles.habilidadeLogo}/>
              </div>
              <div className={styles.habilidadeContainer}>
                <Azure className={styles.habilidadeLogo}/>
              </div>
              <div className={`${styles.habilidadeContainer} ${styles.gitHubContainer}`}>
                <Github className={`${styles.habilidadeLogo} ${styles.gitHubLogo}`}/>
              </div>
            </div>
            <div className={styles.habilidadesLineTwo}>
              <div className={`${styles.habilidadeContainer}`}>
                <Trello className={styles.habilidadeLogo}/>
              </div>
              <div className={`${styles.habilidadeContainer} ${styles.discordContainer}`}>
                <Discord className={styles.habilidadeLogo}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Habilidades