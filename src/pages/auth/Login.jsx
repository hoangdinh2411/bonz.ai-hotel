import { useState } from 'react';
import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <AuthForm
      onSubmit={onSubmit}
      title='Login Form'
      formData={formData}
      handleChange={handleChange}
    >
      <Container className='my-4 w-100'>
        <Link to='/auth/register'>Register</Link>
      </Container>
    </AuthForm>
  );
}
