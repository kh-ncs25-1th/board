import { Link } from 'react-router-dom';
import './BoardListPage.css'
import { useCallback, useEffect, useState } from 'react';
import { useBoard } from '../../../features/board/hooks/useBoard';

const BoardListPage = () => {
  const [boards, setBoards]=useState([]);
  const {loading, error, getList}=useBoard();


  const fetchBoards=useCallback(async()=>{
    try {
      const data=await getList();
      setBoards(data);
    } catch (error) {
      console.error('게시글 읽기 실패:', error);
    }
  });
  useEffect(()=>{
    fetchBoards()
  },[getList])
  //useEffect의 콜백 함수는 cleanup 함수를 반환할 수 있어야 하는데, async 함수는 Promise를 반환하기 때문입니다.
  //에러 처리가 어려워집니다.

  if(loading) {
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