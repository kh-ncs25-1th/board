import React, { useState } from 'react';
import styles from './ProfileEdit.module.css';

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: API 연동
    console.log('Profile update:', formData);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>프로필 수정</h2>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일을 입력하세요"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="currentPassword">현재 비밀번호</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            className={styles.input}
            value={formData.currentPassword}
            onChange={handleChange}
            placeholder="현재 비밀번호를 입력하세요"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="newPassword">새 비밀번호</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className={styles.input}
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="새 비밀번호를 입력하세요"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className={styles.input}
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="새 비밀번호를 다시 입력하세요"
          />
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            저장
          </button>
          <button type="button" className={styles.cancelButton}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit; 