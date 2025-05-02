import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import './header.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          게시판
        </Link>
        <nav className={styles.nav}>
          <Link to="/boards" className={styles.navLink}>게시판</Link>
          <Link to="/profile" className={styles.navLink}>프로필</Link>
        </nav>
        <div className={styles.auth}>
          <Link to="/login" className={styles.loginBtn}>로그인</Link>
          <Link to="/register" className={styles.signupBtn}>회원가입</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;