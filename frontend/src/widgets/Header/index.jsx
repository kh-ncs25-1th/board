import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className='header-wrap'>
          <section className='logo'>
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
          <div className="member-menu">
            <button className="login-btn">로그인</button>
            <button className="signup-btn">회원가입</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;