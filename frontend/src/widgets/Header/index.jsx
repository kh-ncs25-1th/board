import { Link } from 'react-router-dom';
import './header.css'
const Header=()=>{return (
<header className='header'>
  <h1>헤더입니다.</h1>
  <div className='header-wrap'>
    <section className='logo'>
      <h1>로고</h1>
      <div className='wrap'>
        <Link to={'/'}>HOME</Link>
      </div>
    </section>
    <nav>
      <ul>
        <li>
          <Link to={'/boards'}>게시글</Link>
        </li>
      </ul>
    </nav>
  </div>

</header>)}

export default Header;