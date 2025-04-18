import { Link } from 'react-router-dom';
import './BoardListPage.css'

const BoardListPage = () => {
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
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {/* 게시글 목록이 들어갈 자리 */}
        </tbody>
      </table>
      <div className="pagination">
        {/* 페이지네이션이 들어갈 자리 */}
      </div>
    </div>
  )
}

export default BoardListPage;