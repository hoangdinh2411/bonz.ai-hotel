import { Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
function PrivateRouter() {
  const auth = false;

  return auth ? <MainLayout /> : <Navigate to='/auth/login' />;
}

export default PrivateRouter;
