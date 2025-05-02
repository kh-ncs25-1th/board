import React from 'react';
import RegisterForm from '@/features/auth/RegisterForm';
import styles from './Register.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage; 