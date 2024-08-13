import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address!');
      return;
    }

    // Proceed with login logic
    alert('Login successful!');
    navigate('/'); // Redirect to home page after successful login
  };

  const handleSignUpClick = () => {
    navigate('/'); // Assuming you have a signup route
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.header}>SIGN IN</h1>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <label style={styles.label}>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={styles.button}>SIGN IN</button>
          <h5 style={styles.text}>
            New?{' '}
            <span style={styles.link} onClick={handleSignUpClick}>
              Create one
            </span>
          </h5>
          <a href="/Forgot" style={styles.link}>Forgot password?</a>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://tse3.mm.bing.net/th?id=OIP.Ih7xr4sewu26s6saMH_jYwHaEo&pid=Api&P=0&h=180")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  form: {
    width: '300px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '4px 5px 10px black',
    background: '#222',
    color: '#FFD700',
    margin: '20px',
  },
  header: {
    textAlign: 'center',
    color: '#FFD700',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    color: '#FFD700',
  },
  input: {
    width: '95%',
    marginBottom: '15px',
    padding: '8px',
    background: 'transparent',
    borderColor: '#FFD700',
    borderRadius: '10px',
    color: '#FFD700',
  },
  button: {
    width: '50%',
    padding: '10px',
    backgroundColor: '#FFD700',
    color: '#000',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  text: {
    color: '#FFD700',
  },
  link: {
    color: '#FFD700',
    cursor: 'pointer',
  },
};

export default Login;
