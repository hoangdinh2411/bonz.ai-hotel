import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <main className='d-flex position-fixed top-0 left-0 right-0 bottom-0 h-100 w-100 justify-content-center align-items-center'>
      <Outlet />
    </main>
  );
}
