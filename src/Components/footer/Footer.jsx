import styles from '../footer/Footer.module.css'
import React from 'react'
import Logo from '../../Assets/logo/Footer/samuelcazaes.svg?react'
import GitHubLogo from '../../Assets/logo/Footer/github.svg?react'
import LinkedInLogo from '../../Assets/logo/Footer/linkedin.svg?react'
import TelefoneIcon from '../../Assets/icons/telefone.svg?react'
import EmailIcon from '../../Assets/icons/email.svg?react'



const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
        <div className={styles.netInfo}>  
        <a href="" className={styles.logo}><Logo/></a>  
         <a className= {`${styles.InfoItem} ${styles.linkedIn}`} rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/samuelcazaes/"><LinkedInLogo/> www.linkedin.com/in/samuelcazaes</a>
         <a className= {`${styles.InfoItem} ${styles.github}`} rel="noreferrer" target="_blank" href="https://github.com/samuelcazaes"><GitHubLogo/> www.github.com/samuelcazaes</a>
        </div>
        <div className={styles.contactInfo}>    
         <h1>contato<span>.</span></h1>
         <a className= {`${styles.InfoItem} ${styles.email}`} href="">samuelcazaes@gmail.com<EmailIcon/></a>
         <a className= {`${styles.InfoItem} ${styles.telefone}`} href="">(31) 9 9919-3389 <TelefoneIcon/></a>
        </div>
    </footer>
  )
}

export default Footer