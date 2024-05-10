import React from 'react'
import styles from './Formacoes.module.css'
import Decorador from '../../Assets/decoradores/decBolinhas.svg?react'
import Capelo from '../../Assets/icons/academico.svg?react'
const Formacoes = () => {
  return (
    <section className={`${styles.formacoes} container`}>
    
    <h1 className={styles.formacaoTitulo}>formações<span>.</span></h1>

    <div className={styles.formacoesContainer}>
      <div className={styles.formacaoAcademica}>
        <div className={styles.formacaoAcademicaTitle}>
          <Capelo/>
          <h1>formação acadêmica</h1>
        </div>
        <div className={styles.formacaoAcademicaBox}>
          <div className={styles.formacaoAcademicaInfo}>
            <div className={styles.formacaoAcademicaInfoLocal}>
              <span>{'>'}</span>
              <h1>Universidade Paulista / UNIP</h1>
            </div>
              <h2>Análise e Desenvolvimento de Sistemas</h2>
          </div>
          <div className={styles.formacaoAcademicaData}>
            <h2>08/21 - 07/23</h2>
            <span>EAD</span>
          </div>
        </div>
      </div>
    </div>



    </section>
  )
}

export default Formacoes