import React from 'react';
import ProfileInfo from '@/features/profile/ProfileInfo';
import ProfileEdit from '@/features/profile/ProfileEdit';
import styles from './Profile.module.css';

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ProfileInfo />
        <ProfileEdit />
      </div>
    </div>
  );
};

export default ProfilePage; 