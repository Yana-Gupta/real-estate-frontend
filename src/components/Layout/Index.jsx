import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Index';

function Layout() {
  return (
    <div className='App'>
      <Navbar />
      
        <Outlet />

    </div>
  )
}

export default Layout;
