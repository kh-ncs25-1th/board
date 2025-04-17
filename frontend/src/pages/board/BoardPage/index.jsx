import { Link } from 'react-router-dom';
import './BoardPage.css'

const BoardPage=()=>{return (
<section className="board-content">
  <h1>게시글 리스트</h1>
  <div className="wrap">
    <Link to={'./new'} ><button>글쓰기</button></Link>
  </div>
</section>
)}

export default BoardPage;