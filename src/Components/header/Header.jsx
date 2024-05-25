import styles from '../header/Header.module.css'
import Logo from '../../Assets/logo/samuelcazaes.svg?react';
import React from 'react';

const Header = () => {
  return (
    <header id={'navbar'} className={`${styles.header}`}>
      <a className={styles.logo}><Logo/></a>
      <nav>
        <ul className={styles.headerMenu}>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#experiencias">Experiência</a></li>
          {/* <li><a onClick={() => {props.formacoesRef.current.scrollIntoView()}}href="">Formação</a></li> */}
          <li><a href="#formacoes">Formação</a></li>
          <a href="#contato" className={styles.contato}><li className={styles.contatoBox}><p className={styles.contato}>Contato</p></li></a>
        </ul>
      </nav>
    </header>
  )
}

export default Header