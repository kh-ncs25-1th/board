import { useState } from 'react';
import './BoardWritePage.css'
import { useNavigate } from 'react-router-dom';
import { useBoard } from '../../../features/board/hooks/useBoard';


const BoardWritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { create } = useBoard();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const boardData = {
        title,
        content
      }
      await create(boardData);
      navigate("/boards");
    } catch (error) {
      console.error("등록실패", error)
    }
  }



  return (
    <div className="board-write">
      <div className="write-form">
        <h1>게시글 작성</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">제목</label>
            <input
              className="form-input"
              name='title'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
          </div>
          <div className="form-group">
            <label className="form-label">내용</label>
            <textarea
              className="form-textarea"
              name='content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
            />
          </div>
          <div className="button-group">
            <button type="submit" className="submit-button">등록</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BoardWritePage;