import { Link } from 'react-router-dom';
import './BoardListPage.css'
import { useEffect, useState } from 'react';

const BoardListPage = () => {
  const [boards, setBoards]=useState([]);
  const [isLoding, setIsLoding]=useState(true);
  const [error, setError]=useState(null);
  /*
  //날짜시간 오늘날짜이면 시:분:초, 오늘이전 년-월-일
  const formatDate=(dateString)=>{
    const today=new Date();
    console.log("today:",today);
    const updatedAt=new Date(dateString);
    console.log("updatedAt:",updatedAt);

    const isToday=
      today.getFullYear() === updatedAt.getFullYear() &&
      today.getMonth() === updatedAt.getMonth() &&
      today.getDate() === updatedAt.getDate();
    if(isToday){
      //오늘이면
      return `${updatedAt.getHours().toString().padStart(2,'0')}:
        ${updatedAt.getMinutes().toString().padStart(2,'0')}:
        ${updatedAt.getSeconds().toString().padStart(2,'0')}`;
    }
    return `
      ${updatedAt.getFullYear()}-
      ${(updatedAt.getMonth()+1).toString().padStart(2,'0')}-
      ${updatedAt.getDate().toString().padStart(2,'0')}`;
  }
  //*/


  useEffect(()=>{
    const fetchApi=async ()=>{
      try {
        const response=await fetch("http://localhost:8080/api/boards");
        const data=await response.json();
      
        setBoards(data);
        
        setError(null);
      } catch (error) {
        console.error('게시글 읽기 실패!', error);
        setError('서버와 연결이 실패하였습니다. 잠시후 다시 이용해 주세요!')
      }finally{
        setIsLoding(false)//에러가 발생하든 성공하면 로딩상황은 아니므로
      }
      
    }

    fetchApi();
  },[])

  if(isLoding) {
    return <div>로딩 중...</div>
  } 
  if(error!=null){
    return <div>{error}</div>
  }

  return (
    <div className="board-list">
      <div className="board-header">
        <h1 className="board-title">게시글 리스트</h1>
        <Link to={'./new'}>
          <button className="write-button">글쓰기</button>
        </Link>
      </div>
      <table className="board-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>조회수</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board)=>
          <tr key={board.id}>
            <td>{board.id}</td>
            <td>
              <Link to={`./${board.id}`}>{board.title}</Link> 
            </td>
            <td>{board.readCount}</td>
            <td>{'guest'}</td>
            <td>
              {/* {formatDate(board.updatedAt)} */}
              {board.formattedDate}
            </td>
          </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        {/* 페이지네이션이 들어갈 자리 */}
      </div>
    </div>
  )
}

export default BoardListPage;