import React, {useState} from "react";
import axios from 'axios';



const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const [credentials, setCredentials] = useState({
  username:'',
  password:''
})
  // form functions 
  const handleChange  = event => {
    setCredentials({...credentials,
    [event.target.name] : event.target.value})
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
    .then(response => {  
      window.localStorage.setItem('token', response.data.payload);
      props.history.push('/bubblePage');
    })
    .catch(error => {
      console.log(error, 'error making post request for form to the API')
    })
  };

// Component rendered
  return (
    <div className='login-form'>
      <form>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
