import { useEffect, useState } from 'react';
import './BoardDetailPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
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
  let params = useParams()// React Router에서 제공하는 훅으로, URL의 파라미터 값을 가져오는 데 사용
  const boardId = params.boardId; //path: ":boardId"

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(`http://localhost:8080/api/boards/${boardId}`);
      const data = await response.json();
      console.log(">>>", data)
      setBoard(data)
      setUpdatedBoard({ title: data.title, content: data.content })
    }
    fetchApi();

  }, []);

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
    //수정처리완료후 
    const response = await fetch(`http://localhost:8080/api/boards/${boardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBoard),
    });
    const updatedData = await response.json();
    setBoard(updatedData);
    //const updatedCount = await response.json();
    //console.log("updatedData>>", updatedCount)
    //if (updatedCount === 1) setBoard({ ...board, title: updatedBoard.title, content: updatedBoard.content });
    //모달닫기
    handleUpdateClose();
  }

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:8080/api/boards/${boardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      //삭제성공시 처리-detail페이지이 있는게 이상하겠죠?
      navigate("/boards");
    } else {

    }
    //모달닫기
    handleDeleteClose()
  }

  return (
    <div className="board-detail-container">
      <h2 className="board-detail-title">상세페이지</h2>
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