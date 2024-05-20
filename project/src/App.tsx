import { Outlet } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import './index.scss';

function App() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
}

export default App;
