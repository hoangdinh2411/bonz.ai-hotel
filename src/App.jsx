import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import PrivateRouter from './routers/PrivateRouter';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRouter />}>
          <Route index element={<h1>Home</h1>} />
        </Route>
      </Routes>
      <Routes>
        <Route path='/auth/' element={<AuthLayout />}>
          <Route index path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
