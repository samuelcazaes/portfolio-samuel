import styles from '../header/Header.module.css'
import Logo from '../../img/logo/samuelcazaes.svg?react';
import React from 'react';

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo}><Logo/></a>
      <nav>
        <ul className={styles.headerMenu}>
          <li><a href="">Sobre</a></li>
          <li><a href="">Habilidades</a></li>
          <li><a href="">Projetos</a></li>
          <li><a href="">Experiência</a></li>
          <li><a href="">Formação</a></li>
          <a href="" className={styles.contato}><li className={styles.contatoBox}><p className={styles.contato}>Contato</p></li></a>
        </ul>
      </nav>
    </header>
  )
}

export default Header