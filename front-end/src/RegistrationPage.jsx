import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegistrationPage = () => {
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
    console.log('Register');
    try {
      const response = await axios.post(
        'http://localhost:8000/registration',
        user
      );
      console.log(response.data);
    } catch (error) {
      console.log(error, 'registarion error');
    }
    setUser({
      username: '',
      password: '',
    });
  };
  return (
    <div>
      <h1>RegistrationPage</h1>
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
        <button type='submit'>Register</button>
        <p>
          {' '}
          already a user? <Link to='/login'>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationPage;
