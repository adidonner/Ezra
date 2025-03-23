import Content from "../Content/Content";
// import Header from "../LayoutArea/Header/Header"
import './Layout.css';


function Layout() {
  return(
    <div className='layout'>
      <header>
        <Header/>
      </header>
      <hr/>
      <main>
        <Content></Content>
      </main>
    </div>

  )
}

export default Layout;