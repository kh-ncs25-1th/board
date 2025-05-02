import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
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
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    // TODO: 회원가입 API 연동
    console.log('Register attempt:', formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>회원가입</h2>
      
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
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="이름을 입력하세요"
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

      <div className={styles.inputGroup}>
        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="비밀번호를 다시 입력하세요"
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        회원가입
      </button>

      <div className={styles.links}>
        <button 
          type="button" 
          className={styles.linkButton}
          onClick={() => navigate('/login')}
        >
          이미 계정이 있으신가요? 로그인
        </button>
      </div>
    </form>
  );
};

export default RegisterForm; 