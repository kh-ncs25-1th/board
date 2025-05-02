import React, { useState } from 'react';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import AuthTitle from '@/features/auth/ui/AuthTitle';
import { useUser } from '@/features/auth/hook/useUser';
import { Alert, AlertTitle, Button, CircularProgress } from '@mui/material';
import RegisterSuccessModal from '@/features/auth/ui/modals/RegisterSuccessModal';

const RegisterPage = () => {
  const navigate = useNavigate();
  const {loading, error, create} = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const [successDialog, setSuccessDialog] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await create(formData);
    console.log("저장결과", data);
    if (data) {
      setUserData(data);
      setSuccessDialog(true);
    }
  };

  const handleDialogClose = () => {
    setSuccessDialog(false);
    navigate('/login');
  };

  return (<>
    {loading && <CircularProgress />}
    {error &&(
      <Alert severity='error'>
        <AlertTitle>오류발생</AlertTitle>
        {'서버오류로 회원가입이 실패하여습니다. 잠시후 다시 시도해주세요!'}
        <Button onClick={()=>window.location.reload()}>다시시도</Button>
      </Alert>
    )}
    {!error && !loading &&(<>
      <AuthTitle />
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.description}>회원가입을 진행해주세요</p>
        <div className={styles.inputGroup}>
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            placeholder="비밀번호를 입력하세요"
            autoComplete="new-password"
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
            placeholder="비밀번호를 다시 입력하세요"
            autoComplete="new-password"
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
    </>)}

    <RegisterSuccessModal
      open={successDialog}
      onClose={handleDialogClose}
      userData={userData}
    />
  </>);
};

export default RegisterPage; 