import { Button, Form } from 'react-bootstrap';

export default function AuthForm(props) {
  const { title = 'Form', onSubmit, formData, handleChange, children } = props;
  return (
    <>
      <Form
        onSubmit={onSubmit}
        style={{
          maxWidth: '500px',
        }}
        className='w-75  border border-1 rounded-2 p-4'
      >
        <h1 className=''>{title}</h1>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={formData.email}
            type='email'
            placeholder='Enter email'
            name='email'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={formData.password}
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
        </Form.Group>
        {children}

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
}
