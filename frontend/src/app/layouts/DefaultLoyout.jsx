import { Outlet } from "react-router-dom"

const DefaultLoyout=()=>{
  return(

  <div className="">

    <header>
      <h1>헤더</h1>
    </header>
    <main className="main-content">
      <Outlet />
    </main>
    <footer>
      <h1>푸터</h1>
    </footer>
  </div>)
}

export default DefaultLoyout;