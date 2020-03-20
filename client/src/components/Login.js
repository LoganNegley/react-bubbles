import React, {useState} from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


const [credentials, setCredentials] = useState({
  username:'',
  password:''
})
  // form functions 
  const handleChanges = event => {

  }
  return (
    <div className='login-form'>
      <form>

      </form>
    </div>
  );
};

export default Login;
