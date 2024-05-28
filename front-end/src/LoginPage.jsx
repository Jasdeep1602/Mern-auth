import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('login');
    try {
      const response = await axios.post(
        'https://mern-auth-back-end.onrender.com/login',
        user
      );
      const { message, success } = response.data;

      if (success) {
        console.log('Login Successfull');
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error, 'login error');
    }
    setUser({
      username: '',
      password: '',
    });
  };
  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={user.username}
          onChange={handleInput}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={user.password}
          onChange={handleInput}
        />
        <button type='submit'>Login</button>
        <p>
          {' '}
          Not registered yet? <Link to='/registration'>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
