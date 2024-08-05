'use client'
import Link from 'next/link';
import React,{useState} from 'react';
import styles from '../styles/components.module.scss'

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false)
  
  return (
    <header className={`${styles.navContainer} ${sideBar ? styles.navContainerResponsive : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <div className={styles.navLeftLogoPart}>
            <img className={styles.logo} loading='lazy' src="/logo.jpg" alt="cinema" />
            <h1><b>neoflema</b><span className='font-light'>TV</span></h1>
          </div>
          <div className={styles.categories}>
            <p>Categories</p>
            <img className={styles.arrow} loading='lazy' src="/arrow-down.svg" alt="" />
          </div>
        </div>
        <div className={styles.navRight}>
          <Link className={styles.navRightLink} href="/">Register</Link>
          <Link className={styles.navRightLink} href="/">Login</Link>
        </div>
      </nav>
      <img onClick={() => setSideBar(!sideBar)} className={styles.menuOpenClose} src={sideBar ? '/close.svg' : '/menu.svg'} loading='lazy' alt="" />
    </header>
  );
};

export default Navbar;
