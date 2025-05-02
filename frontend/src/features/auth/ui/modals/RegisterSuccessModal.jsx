import React from 'react';
import { 
  Button,
  Typography,
  Box,
  Divider
} from '@mui/material';
import BaseModal from '@/features/common/ui/modals/BaseModal';

const RegisterSuccessModal = ({ 
  open, 
  onClose, 
  userData 
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const actions = (
    <Button 
      onClick={onClose} 
      variant="contained" 
      color="primary"
      fullWidth
    >
      로그인 페이지로 이동
    </Button>
  );

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title="회원가입 완료"
      actions={actions}
    >
      <Typography variant="body1" gutterBottom>
        회원가입이 성공적으로 완료되었습니다.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          가입 정보
        </Typography>
        <Box sx={{ pl: 2 }}>
          <Typography variant="body2" color="text.secondary">
            가입일시: {userData?.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            가입일시: {userData?.createdAt ? formatDate(userData.createdAt) : '정보 없음'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            이메일: {userData?.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            이름: {userData?.name}
          </Typography>
          
        </Box>
      </Box>
    </BaseModal>
  );
};

export default RegisterSuccessModal; 