import { Outlet } from "react-router-dom"
import Header from "../../widgets/Header";

const DefaultLoyout=()=>{
  return(

  <div className="default-layout">
    <Header />
    <main className="main-content">
      <Outlet />
    </main>
    <footer>
      <h1>푸터</h1>
    </footer>
  </div>)
}

export default DefaultLoyout;