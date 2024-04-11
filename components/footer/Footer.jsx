import styles from '../footer/Footer.module.css'
import React from 'react'
import Logo from '../../img/logo/Footer/samuelcazaes.svg?react'
import GitHubLogo from '../../img/logo/Footer/github.svg?react'
import LinkedInLogo from '../../img/logo/Footer/linkedin.svg?react'
import TelefoneIcon from '../../img/icons/telefone.svg?react'
import EmailIcon from '../../img/icons/email.svg?react'



const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.netInfo}>  
        <a href="" className={styles.logo}><Logo/></a>  
         <a className= {`${styles.InfoItem} ${styles.linkedIn}`} href=""><LinkedInLogo/> www.linkedin.com/samuelcazaes</a>
         <a className= {`${styles.InfoItem} ${styles.github}`} href=""><GitHubLogo/> www.linkedin.com/samuelcazaes</a>
        </div>
        <div className={styles.contactInfo}>    
         <h1>contato<span>.</span></h1>
         <a className= {`${styles.InfoItem} ${styles.email}`} href="">www.linkedin.com/samuelcazaes <EmailIcon/></a>
         <a className= {`${styles.InfoItem} ${styles.telefone}`} href="">www.linkedin.com/samuelcazaes <TelefoneIcon/></a>
        </div>
    </footer>
  )
}

export default Footer