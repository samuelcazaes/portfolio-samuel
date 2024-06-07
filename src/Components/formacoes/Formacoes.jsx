import React, { forwardRef } from 'react'
import styles from './Formacoes.module.css'
import Decorador from '../../Assets/decoradores/decBolinhas.svg?react'
import Capelo from '../../Assets/icons/academico.svg?react'
import ExtraCurri from '../../Assets/icons/extracurriculares.svg?react'
import Idiomas from '../../Assets/icons/idiomas.svg?react'
import BandeiraBrasil from '../../Assets/imagens/portugues.png'
import BandeiraIngles from '../../Assets/imagens/ingles.png'
import DecBigBolinhas from '../../Assets/decoradores/decBigBolinhas.svg?react'


const Formacoes = (props, ref) => {
  return (
    // <section ref={ref} id={'formacoes'} className={`${styles.formacoes} container`}>
    <section id={'formacoes'} className={`${styles.formacoes} container`}>
    <h1 className={styles.formacaoTitulo}>formações<span>.</span></h1>

    <div className={styles.formacoesContainer}>
      <div className={styles.formacaoAcademica}>
        <div className={styles.formacoesTitle}>
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
            <div className={styles.decoradores}>
              <Decorador/>
              <Decorador/>
            </div>
          </div>
          <div className={styles.formacaoAcademicaData}>
            <h2>08/21 - 07/23</h2>
            <span>EAD</span>
          </div>
        </div>
      </div>
      <div className={styles.extraCurriculares}>
        <div className={styles.extraCurricularesTitle}>
          <h1>extra curriculares</h1>
          <ExtraCurri/>
        </div>
        <div className={styles.extraCurricularesBox}>
          <div className={styles.extraCurricularesSchoolTitle}>
            <span>{'>'}</span>
            <h1>Origamid</h1>
          </div>
          <div className={styles.extraCurricularesCompetenciasBox}>
            <div className={styles.extraCurricularesCompetencia}>
              <h2>HTML e CSS para Iniciantes</h2>
              <span>completo - 46 horas</span>
            </div>
            <div className={styles.extraCurricularesCompetencia}>
              <h2>CSS Grid Layout</h2>
              <span>completo - 10 horas</span>
            </div>
            <div className={styles.extraCurricularesCompetencia}>
              <h2>CSS Flexbox</h2>
              <span>completo - 6 horas</span>
            </div>
            <div className={styles.extraCurricularesCompetencia}>
              <h2>JavaScript Completo ES6</h2>
              <span>completo - 74 horas</span>
            </div>
            <div className={styles.extraCurricularesCompetencia}>
              <h2>React Completo</h2>
              <span>completo - 36 horas</span>
            </div>
            <div className={styles.extraCurricularesCompetencia}>
              <h2>UI Design para Iniciantes</h2>
              <span>completo - 34 horas</span>
            </div>
            <div className={styles.extraCurricularesCompetencia}>
              <h2>UI Design Avançado</h2>
              <span>a iniciar - 15 horas</span>
            </div>
            <div className={styles.extraCurricularesCompetencia}>
              <h2>Tipografia Avançada</h2>
              <span>a iniciar - 12 horas</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.idiomas}>
        <div className={styles.idiomasTitle}>
          <Idiomas/>
          <h1 className={styles.idiomasTitle}>idiomas</h1>
        </div>
        <div className={styles.idiomasDecBox}>
          <div className={styles.idiomasBox}>
            <div className={styles.idioma}>
            <img src={BandeiraBrasil} alt="" />
            <h2>Português - Brasileiro | </h2><span>Nativo</span>
            </div>
            <div className={styles.idioma}>
            <img src={BandeiraIngles} alt="" />
            <h2>Inglês - Americano | </h2><span>Fluente</span>
            </div>
          </div>
          <div className={styles.bigDecorador}>
            <DecBigBolinhas/>
          </div>
        </div>
      </div>
    </div>



    </section>
  )
}

export default forwardRef(Formacoes)