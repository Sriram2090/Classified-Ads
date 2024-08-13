import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    if (formData.password !== formData.confirmPassword) {
      alert('Password and Confirm Password must match!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address!');
      return;
    }

    alert('Signup successful!');
    navigate('/login'); 
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.header}>SIGN UP</h1>
        <div style={styles.inputContainer}>
          <label style={styles.label}>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>
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
          <label style={styles.label}>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>Sign Up</button>
          <h5 style={styles.text}>
            Already have an account? <a href="/side" style={styles.link}>Sign in</a>
          </h5>
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
    width: '90%',
    maxWidth: '400px',
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
    marginBottom: '20px',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    color: '#FFD700',
  },
  input: {
    width: '100%',
    marginBottom: '15px',
    padding: '10px',
    background: 'transparent',
    borderColor: '#FFD700',
    borderRadius: '10px',
    color: '#FFD700',
    boxSizing: 'border-box',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#FFD700',
    color: '#000',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  text: {
    color: '#FFD700',
  },
  link: {
    color: '#FFD700',
    textDecoration: 'none',
  },
};

export default SignUp;
