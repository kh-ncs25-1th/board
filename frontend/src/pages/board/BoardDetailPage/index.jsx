import { useEffect, useState } from 'react';
import './BoardDetailPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, CircularProgress, Alert, AlertTitle } from '@mui/material';
import { useBoard } from '../../../features/board/hooks/useBoard';

const BoardDetailPage = () => {
  const navigate = useNavigate();
  // 모달 상태를 구분해서 관리
  const [updateOpen, setUpdateOpen] = useState(false);  // 수정 모달
  const [deleteOpen, setDeleteOpen] = useState(false);  // 삭제 모달
  const [board, setBoard] = useState({});
  const [updatedBoard, setUpdatedBoard] = useState({
    title: '',
    content: ''
  });
  //서버에 접속해서 url path변수의 값에 해당하는 게시글을 읽어오면됨
  //조회할떄???
  const params = useParams();
  const boardId = params.boardId; //path: ":boardId"
  const { loading, error, get, update, remove } = useBoard();

  useEffect(() => {
    const fetchApi = async () => {
      const data = await get(boardId);
      if (!error) {  // error가 null이면 API 호출이 성공한 것
        setBoard(data);
        setUpdatedBoard({ title: data.title, content: data.content });
      }
    };
    fetchApi();
  }, [boardId]);

  // 수정 모달 제어
  const handleUpdateOpen = () => {
    setUpdateOpen(true);
  };
  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };

  // 삭제 모달 제어
  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleUpdate = async () => {
    const data = await update(boardId, updatedBoard);
    if (!error) {  // error가 null이면 수정이 성공한 것
      setBoard(data);
      handleUpdateClose();
    }
  };

  const handleDelete = async () => {
    const response = await remove(boardId);
    if (!error && response.status === 204) {  // error가 null이고 응답 상태가 204면 삭제가 성공한 것
      navigate("/boards");
      handleDeleteClose();
    }
  };

  // 에러 메시지 생성 함수
  const getErrorMessage = (error) => {
    if (error?.response?.status === 404) {
      return "게시글을 찾을 수 없습니다.";
    }
    if (error?.response?.status === 403) {
      return "접근 권한이 없습니다.";
    }
    if (error?.response?.status === 401) {
      return "로그인이 필요합니다.";
    }
    return "데이터를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.";
  };

  return (
    <div className="board-detail-container">
      <h2 className="board-detail-title">상세페이지</h2>
      {loading && <CircularProgress />}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          <AlertTitle>오류 발생</AlertTitle>
          {getErrorMessage(error)}
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ mt: 1 }}
            onClick={() => window.location.reload()}
          >
            다시 시도
          </Button>
        </Alert>
      )}
      {/*
      !loading: 로딩이 끝났을 때 (loading이 false일 때)
      !error: 에러가 없을 때 (error가 null일 때)
      */}
      {!loading && !error && (
        <>
          <ul className="board-detail-list">
            <li className="board-detail-item">
              <span className="board-detail-label">번호:</span>
              <span className="board-detail-content">{board.id}</span>
            </li>
            <li className="board-detail-item">
              <span className="board-detail-label">조회수:</span>
              <span className="board-detail-content">{board.readCount}</span>
            </li>
            <li className="board-detail-item">
              <span className="board-detail-label">작성일:</span>
              <span className="board-detail-content">{board.createdAt}, 최종수정일:{board.updatedAt}</span>
            </li>
            <li className="board-detail-item">
              <span className="board-detail-label">제목:</span>
              <span className="board-detail-content">{board.title}</span>
            </li>
            <li className="board-detail-item">
              <span className="board-detail-label">내용:</span>
              <span className="board-detail-content">{board.content}</span>
            </li>
          </ul>
          <div className="board-detail-actions">
            <Button variant='contained' color='primary' onClick={handleDeleteOpen}>삭제</Button>
            <Button variant='contained' color='primary' onClick={handleUpdateOpen}>수정</Button>
          </div>
        </>
      )}
      {/* 확인 모달 */}
      <Dialog
        open={deleteOpen}
        onClose={handleDeleteClose}
      >
        <DialogTitle>게시글 삭제</DialogTitle>
        <DialogContent>
          <DialogContentText>
            정말로 이 게시글을 삭제하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose}>취소</Button>
          <Button onClick={handleDelete} color="error" autoFocus>
            삭제
          </Button>
        </DialogActions>
      </Dialog>
      {/* 수정 모달 */}
      <Dialog open={updateOpen} onClose={handleUpdateClose} maxWidth="md" fullWidth >
        <DialogTitle>게시글 수정</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin='dense' label="제목" type='text' fullWidth
            value={updatedBoard.title}
            onChange={(e) => setUpdatedBoard({ ...updatedBoard, title: e.target.value })}
          />
          <TextField autoFocus margin='dense' label="내용" type='text' fullWidth multiline rows={10}
            value={updatedBoard.content}
            onChange={(e => setUpdatedBoard({ ...updatedBoard, content: e.target.value }))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose}>취소</Button>
          <Button onClick={handleUpdate} variant='contained' color='primary'>수정완료</Button>
        </DialogActions>

      </Dialog>
    </div>
  )
}

export default BoardDetailPage;