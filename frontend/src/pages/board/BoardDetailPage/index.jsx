import { useEffect, useState } from 'react';
import './BoardDetailPage.css'
import { useParams } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
const BoardDetailPage=()=>{
  const [open, setOpen]=useState(false);
  const [board, setBoard]=useState({});
  const [updatedBoard,setUpdatedBoard]=useState({
    title:'',
    content:''
  });
  //서버에 접속해서 url path변수의 값에 해당하는 게시글을 읽어오면됨
  //조회할떄???
  let params = useParams()// React Router에서 제공하는 훅으로, URL의 파라미터 값을 가져오는 데 사용
  const boardId=params.boardId; //path: ":boardId"

  useEffect(()=>{
    const fetchApi=async ()=>{
      const response=await fetch(`http://localhost:8080/api/boards/${boardId}`);
      const data=await response.json();
      console.log(">>>",data)
      setBoard(data)
      setUpdatedBoard({title: data.title, content: data.content})
    }
    fetchApi();

  },[])
  const handleOpen=()=>{
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
  }
  const handleUpdate=async ()=>{
    //수정처리완료후 
    const response=await fetch(`http://localhost:8080/api/boards/${boardId}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBoard),
    });
    const updatedData= await response.json();
    //console.log("updatedData>>",updatedData)
    setBoard(updatedData);
    //모달닫기
    handleClose();
  }

  return(
<>
  <h2>상세페이지</h2>
  <ul>
    <li>번호:{board.id}</li>
    <li>조회수:{board.readCount}</li>
    <li>작성일:{board.createdAt}, 최종수정일:{board.updatedAt}</li>
    <li>제목:{board.title}</li>
    <li>내용:{board.content}</li>
  </ul>
  <Button variant='contained' color='primary' onClick={handleOpen}>수정</Button>
  <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth >
    <DialogTitle>게시글 수정</DialogTitle>
    <DialogContent>
      <TextField autoFocus margin='dense' label="제목" type='text' fullWidth 
        value={updatedBoard.title}
        onChange={(e)=>setUpdatedBoard({...updatedBoard, title: e.target.value})}
          />
      <TextField autoFocus margin='dense' label="내용" type='text' fullWidth multiline rows={10} 
        value={updatedBoard.content} 
        onChange={(e=>setUpdatedBoard({...updatedBoard, content: e.target.value}))}
        />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>취소</Button>
      <Button onClick={handleUpdate} variant='contained' color='primary'>수정완료</Button>
    </DialogActions>

  </Dialog>
</>
)}

export default BoardDetailPage;