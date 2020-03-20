import React, {useState} from "react";
import axios from 'axios';


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const [credentials, setCredentials] = useState({
  username:'',
  password:''
})
  // form functions 
  const handleChanges = event => {
    setCredentials({...credentials,
    [event.target.name] : event.target.value})
  };

  const handleSubmit = event => {
    axios.post('', credentials)
    .then(response => {   
      console.log(response)
    })
    .catch(error => {
      console.log(error, 'error making post request for form to the API')
    })
  };


  return (
    <div className='login-form'>
      <form>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={credentials.username}
          // onChange={}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          // onChange={}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
