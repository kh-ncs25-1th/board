import React from 'react';
import LoginForm from '@/features/auth/LoginForm';
import styles from './Login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage; 