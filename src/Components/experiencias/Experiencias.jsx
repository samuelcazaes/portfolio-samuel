import React from 'react'
import styles from './Experiencias.module.css'
import SecondLogo from '../../Assets/logo/experiencias/Second_Mind.jpg'
import ActivityIcon from '../../Assets/icons/atividades.svg?react'
import GlobeIcon from '../../Assets/icons/linguagens.svg?react'
const Experiencias = () => {
  return (
    <section id={'experiencias'} className={`${styles.experiencias} container`}>
      <h1 className={styles.sectionTitle}>experiências profissionais<span>.</span></h1>
      <div className={styles.expContainer}>
        <div className={styles.logoContainer}>
          <img src={SecondLogo} alt="" />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.titleContainer}>
              <h1>Second Mind</h1>
            <div className={styles.subTitleInfo}>
              <h2>Estagiário | Back-End</h2>
              <span>03/2022 - 09/2023</span>
            </div>
          </div>
          <div className={styles.activityContainer}>
            <div className={styles.activityHeader}>
              <ActivityIcon/> <h1>Atividades.</h1>
            </div>
              <p>Inserido nas atividades de planejamento de novos projetos utilizando Scrum e Kanban, no desenvolvimento e manutenção de sistemas Web e Api da empresa e de clientes, contato e suporte para com os clientes, aprendizado de novas tecnologias a fim de inovar e utilizar nos projetos além de reuniões de alinhamento e planejamento dos projetos decorrentes.</p>
          </div>
          <div className={styles.skillsContainer}>
            <div className={styles.skillsHeader}>
              <GlobeIcon/> <h1>Linguagens e Ferramentas</h1>
            </div>
            <div className={styles.skills}>
              <div className={styles.skillsBox}>
                <span>C#</span> <span>Kotlin</span> <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>SQL Server</span> <span>PostgreSQL</span> <span>MySql</span> <span>Oracle</span> <span>MVC</span> <span>MVVM</span> <span>Clean Architecture</span> <span>SCRUM</span> <span>Kanban</span> <span>Git</span> <span>Azure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default Experiencias