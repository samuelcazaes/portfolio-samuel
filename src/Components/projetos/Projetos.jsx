import React from 'react'
import Tip from '../../Assets/icons/dica.svg?react'
import styles from './Projetos.module.css'
import Portfolio from '../../Assets/imagens/Projetos/on/samuelcazaes_on.png'
import PortfolioOFF from '../../Assets/imagens/Projetos/off/samuelcazaes_off.png'
import PortfolioMobile from '../../Assets/imagens/Projetos/mobile/on/samuelcazaes_mobile_on.jpg'
import PortfolioMobileOff from '../../Assets/imagens/Projetos/mobile/off/samuelcazaes_mobile_off.png'
import PortfolioMiniature from '../../Assets/imagens/Projetos/miniatures/portfoliominiature.jpg'
import AgileTrack from '../../Assets/imagens/Projetos/on/agiletrack_on.png'
import AgileTrackOFF from '../../Assets/imagens/Projetos/off/agiletrack_off.png'
import AgileTrackMobile from '../../Assets/imagens/Projetos/mobile/on/agiletrack_mobile_on.png'
import AgileTrackMobileOff from '../../Assets/imagens/Projetos/mobile/off/agiletrack_mobile_off.png'
import AgileTrackMiniature from '../../Assets/imagens/Projetos/miniatures/agiletrackminiature.jpg'
import VisiteQueluzito from '../../Assets/imagens/Projetos/on/visitequeluzito_on.png'
import VisiteQueluzitoOFF from '../../Assets/imagens/Projetos/off/visitequeluzito_off.png'
import VisiteQueluzitoMobile from '../../Assets/imagens/Projetos/mobile/on/visitequeluzito_mobile_on.png'
import VisiteQueluzitoMobileOff from '../../Assets/imagens/Projetos/mobile/off/visitequeluzito_mobile_off.png'
import VisiteQueluzitoMiniature from '../../Assets/imagens/Projetos/miniatures/visitequeluzitominiature.jpg'
import AmarilFranklin from '../../Assets/imagens/Projetos/on/amarilfranklin_on.png'
import AmarilFranklinOFF from '../../Assets/imagens/Projetos/off/amarilfranklin_off.png'
import AmarilFranklinMobile from '../../Assets/imagens/Projetos/mobile/on/amarilfranklin_mobile_on.png'
import AmarilFranklinMobileOff from '../../Assets/imagens/Projetos/mobile/off/amarilfranklin_mobile_off.png'
import AmarilFranklinMiniature from '../../Assets/imagens/Projetos/miniatures/amarilfranklinminiature.jpg'
import Setinha from '../../Assets/icons/seta_botao.svg?react'

const Projetos = () => {

  const [infoDisplay, setInfoDisplay] = React.useState('portfolio');
  const [width, setWidth] = React.useState(window.innerWidth); 

  console.log(width);

  return (
    <section id={'projetos'} className={`${styles.projetosBox} container`}>
      <div className={styles.leftBox}>
        <div className={styles.tipBox}>
        <Tip/>
        <span>clique nos projetos abaixo para saber mais sobre eles</span>
        </div>
          <h1 className={`${styles.detailsProjetosTitle} ${styles.sectionTitleMobile}`}>projetos<span>.</span></h1>
        { width <= 430 ?
          <div className={styles.projetosItemsBox}>
            <div onClick={() => setInfoDisplay('portfolio')} className={styles.projetosItem}>
              {infoDisplay === 'portfolio' ? 
                <h1 className={styles.selectedTitle}>portfólio</h1> : <h1>portfólio</h1>}
              {infoDisplay === 'portfolio' ? 
                <img className={styles.selected} src={PortfolioMobile} alt="" /> : <img src={PortfolioMobileOff} alt="" />}            
            </div>
            <div onClick={() => setInfoDisplay('agileTrack')} className={styles.projetosItem}>
              {infoDisplay === 'agileTrack' ?
                <h1 className={styles.selectedTitle}>agile track</h1> : <h1>agile track</h1>}
              {infoDisplay === 'agileTrack' ? 
                <img  className={styles.selected} src={AgileTrackMobile} alt="" /> : <img src={AgileTrackMobileOff} alt="" />} 
            </div>
            <div onClick={() => setInfoDisplay('visiteQueluzito')} className={styles.projetosItem}>
              {infoDisplay === 'visiteQueluzito' ? 
                <h1 className={styles.selectedTitle}>visite queluzito</h1> : <h1>visite queluzito</h1>}
              {infoDisplay === 'visiteQueluzito' ?
                <img  className={styles.selected} src={VisiteQueluzitoMobile} alt="" /> : <img src={VisiteQueluzitoMobileOff} alt="" />}
            </div>
            <div onClick={() => setInfoDisplay('amarilFranklin')} className={styles.projetosItem}>
            {infoDisplay === 'amarilFranklin' ? 
              <h1 className={styles.selectedTitle}>amaril franklin</h1> : <h1>amaril franklin</h1>}
            {infoDisplay === 'amarilFranklin' ?
              <img className={styles.selected} src={AmarilFranklinMobile} alt="" /> : <img src={AmarilFranklinMobileOff} alt="" />}          
            </div>
          </div> 
          :
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
        }
      </div>
      
      <div className={styles.rightBox}>
        <div className={styles.detailsBox}>
          <h1 className={`${styles.detailsProjetosTitle} ${styles.sectionTitleDesktop}`}>projetos<span>.</span></h1>
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
              <p>O projeto portfólio consiste em ser como um currículo virtual para o desenvolvedor, descrevendo habilidades e as comprovando por meio de uma lista de projetos aqui demonstrados, possibilitando o visitante saber qual fora a participação deste programador nos projetos mencionados com apenas um clique.
              </p>
              <p>Este site foi projetado desde o começo visando a excelência, sendo assim ferramentas como o Figma foram necessárias para a prototipação e UI/UX, enquanto sua codificação fora feita em ReactJS e Git para versionamento, aplicando os conhecimentos adquiridos nos cursos concluídos.
              </p>
            </div> 
          : infoDisplay === 'agileTrack' ?
            <div key={Math.random()} className={styles.descriptions}>
              <p>O projeto Agile Track fora o mais engrandecedor no quesito de ganho de conhecimento Back-End e gerencial para o desenvolvedor, o projeto tem a premissa de um ERP e CRM, possibilitando acompanhar e gerir projetos, tais como colaboradores e fazer extratos, além disso possui ferramentas muito úteis para a gestão, como gráficos de andamento do projeto e horas trabalhadas, burndown, tickets, organização de sistema por cliente (este podendo acessar o aplicativo/site) para que possam usufruir e gerir suas empresas e colaboradores da melhor forma possível.
              </p>
              <p>Neste site/app o desenvolvedor teve a oportunidade de acompanhar e auxiliar de perto o desenvolvimento desde sua estruturação em uma nova arquitetura utilizada na empresa: A Clean Architecture. Sendo desenvolvido em CSharp e utilizando boas práticas de codificação e paradigmas como SOLID e Clean Code, a API fora construída no padrão Restfull e banco de dados relacional (Microsoft SQL Server) como principal passagem e salvamento de dados, porém ainda sim o desenvolvedor teve a oportunidade de conhecer e auxiliar no desenvolvimento de um sistema de notificações baseado em mensageria RabbitMQ e banco de dados não relacional MongoDB.
              </p>
            </div> 
          : infoDisplay === 'visiteQueluzito' ?
            <div key={Math.random()} className={styles.descriptions}>
              <p>O projeto Visite Queluzito é um aplicativo de rotas, trilhas, pontos turísticos e de interesse, tais como comércios locais na cidade de Queluzito - Minas Gerais, feito para prefeitura de Queluzito, possibilitando visitantes desfrutarem de um aconchegante e acolhedor passeio.
              </p>
              <p>A experiência do desenvolvedor para com este app/site fora auxiliar na manutenção e desenvolvimento de novas funcionalidades utilizando API Restfull juntamente de um projeto arquitetado em MvvM (Model-View-View-Model) uma alternativa ao MVC utilizado pela empresa a qual este colaborava, sendo CSharp a linguagem principal para o desenvolvimento e Microsoft SQL Server para banco de dados relacional.
              </p>
            </div> 
          : infoDisplay === 'amarilFranklin' &&
            <div key={Math.random()} className={styles.descriptions}>
              <p>O projeto Amaril Franklin, feito para a própria corretora, consistiu em não só desenvolver novas funcionalidades como também dar manutenção em sistemas já existentes anteriormente, levando o desenvolvedor a aprender diversas tecnologias as quais este ainda não tinha vivenciado, aqui podemos citar sistemas de área do usuário para auxiliar no acompanhamento de bens e taxas, sistema de rotinas (funções automáticas), extratos, importação e transformação de dados para a exportação de .xml, .pdf e .xlsx, além disso trazendo conhecimentos financeiros básicos de grande valia para o desenvolvedor.
              </p>
              <p>Estes sistemas foram produzidos e mantidos em diversas tecnologias e arquiteturas, entre as quais o desenvolvedor teve a oportunidade de vivenciar: CSharp, Kotlin, MVC, MvvM, Microsoft SQL Server, Oracle, SpringBoot, BootStrap e Linux (Acessado pelo app Termius). O projeto serviu não só de aprendizado no Back-End mas também no Front-End, já que as telas nas aplicações MVC, eram geridas, mantidas e desenvolvidas pelo Back-End também utilizando BootStrap.
              </p>
            </div>}
        </div>    

        {infoDisplay === 'portfolio' ? 
          <a href="#">
              <div className={styles.button}>
                <span>SAIBA MAIS</span><Setinha/>
              </div>
          </a> 
          : infoDisplay === 'agileTrack' ? 
          <a href="https://www.agiletrack.com.br" rel="noreferrer" target="_blank">
            <div className={styles.button}>
              <span>SAIBA MAIS</span><Setinha/>
            </div>
          </a>
          : infoDisplay === 'visiteQueluzito' ? 
          <a href="https://www.visitequeluzito.com.br" rel="noreferrer" target="_blank">
            <div className={styles.button}>
              <span>SAIBA MAIS</span><Setinha/>
            </div>
          </a>
          : infoDisplay === 'amarilFranklin' && 
          <a href="https://www.amarilfranklin.com.br" rel="noreferrer" target="_blank">
            <div className={styles.button}>
              <span>SAIBA MAIS</span><Setinha/>
            </div>
          </a>}
      </div>
    </section>
  )
}

export default Projetos