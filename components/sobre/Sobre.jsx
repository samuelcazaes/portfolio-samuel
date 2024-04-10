import styles from "./Sobre.module.css"

const Sobre = () => {
  return (
    <section className={styles.sobre}>
      <div className={styles.infoContainer}>
      <h1 className={styles.titulo}>sobre mim <span>.</span></h1>
      <p className={styles.descricao}>Sou um desenvolvedor graduado no curso de Análise e Desenvolvimento de Sistemas,  preparado para atuar como full-stack, back-end ou front-end no mercado, a fim de aprimorar meus conhecimentos e crescer na área, sempre atraído por aprender novas tecnologias e ferramentas, absorver e compartilhar ideias e culturas, conhecer novas pessoas e vencer desafios. Além da graduação, procuro estar sempre atualizado no universo da tecnologia e programação por meio de cursos a parte, desta forma estarei sempre preparado para atender as demandas com excelência e proficiência.</p>
      </div>
      <div className={styles.fotoDec}>
      </div>  
      <img className={styles.foto} src="../../img/imagens/Sobre/Panda.jpg" alt="" />
      
    </section>

  )
}

export default Sobre