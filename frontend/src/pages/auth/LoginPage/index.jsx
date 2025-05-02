import React, { useState } from 'react';
import styles from './Login.module.css';
import {useNavigate } from 'react-router-dom';
import AuthTitle from '@/features/auth/ui/AuthTitle';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: 로그인 API 연동
    console.log('Login attempt:', formData);
  };

  return (<>
    <AuthTitle />
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.description}>로그인을 진행해주세요</p>
      <div className={styles.inputContainer}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="이메일을 입력하세요"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          로그인
        </button>
      </div>

      <div className={styles.links}>
        <button
          type="button"
          className={styles.linkButton}
          onClick={() => navigate('/signup')}
        >
          회원가입
        </button>
        <button
          type="button"
          className={styles.linkButton}
          onClick={() => navigate('/forgot-password')}
        >
          비밀번호 찾기
        </button>
      </div>
    </form>
  </>
  );
};

export default LoginPage; 