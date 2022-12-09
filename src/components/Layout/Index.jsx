import { Outlet, } from 'react-router-dom';
import Footer from '../Footer/Index';
import Navbar from '../Navbar/Index';

function Layout() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;
