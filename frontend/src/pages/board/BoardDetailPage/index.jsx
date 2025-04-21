import { useEffect, useState } from 'react';
import './BoardDetailPage.css'
import { useParams } from 'react-router-dom';
const BoardDetailPage=()=>{
  const [board, setBoard]=useState({});
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
    }
    fetchApi();

  },[])

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
</>
)}

export default BoardDetailPage;