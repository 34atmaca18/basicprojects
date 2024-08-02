import Link from 'next/link';
import React from 'react';
import styles from '../styles/components.module.scss'

const Navbar = () => {
  return (
    <header className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <div className={styles.navLeftLogoPart}>
            <img className={styles.logo} src="/logo.jpg" alt="cinema" />
            <h1><b>neoflema</b><span className='font-light'>TV</span></h1>
          </div>
          <div className={styles.categories}>
            <p>Categories</p>
            <img className={styles.arrow} src="/arrow-down.svg" alt="" />
          </div>
        </div>
        <div className={styles.navRight}>
          <Link className={styles.navRightLink} href="/">Register</Link>
          <Link className={styles.navRightLink} href="/">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
