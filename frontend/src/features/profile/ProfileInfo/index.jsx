import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  // TODO: API 연동 후 실제 데이터로 교체
  const userInfo = {
    name: '홍길동',
    email: 'hong@example.com',
    joinDate: '2024-03-20'
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>프로필 정보</h2>
      
      <div className={styles.infoGroup}>
        <span className={styles.label}>이름</span>
        <span className={styles.value}>{userInfo.name}</span>
      </div>

      <div className={styles.infoGroup}>
        <span className={styles.label}>이메일</span>
        <span className={styles.value}>{userInfo.email}</span>
      </div>

      <div className={styles.infoGroup}>
        <span className={styles.label}>가입일</span>
        <span className={styles.value}>{userInfo.joinDate}</span>
      </div>

      <button className={styles.editButton}>
        프로필 수정
      </button>
    </div>
  );
};

export default ProfileInfo; 