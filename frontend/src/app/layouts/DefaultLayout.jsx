import { Outlet } from "react-router-dom"
import Header from "../../widgets/Header";
import "./DefaultLayout.css"

const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <Header />
      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 게시판 프로젝트. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default DefaultLayout;