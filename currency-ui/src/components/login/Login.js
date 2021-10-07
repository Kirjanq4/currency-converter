import React, { useState } from "react";
import Container from "../container/Container";

const Login = () => {

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    isAuthenticated: false,
    open: false,
  });
  
  const handleChange = (e) => {
    setUserData({ ...userData,[e.target.name]: e.target.value });
  };

  const login = () => {
    const user = { userName: userData.username, password: userData.password };
    
    fetch("http://localhost:8080/" + 'login', {
      method: 'POST',
      body: JSON.stringify(user),
    })
      .then((res) => {
        const jwtToken = res.headers.get('Authorization');
        const newUser = JSON.stringify(user);
        if (jwtToken !== null) {
          sessionStorage.setItem("jwt", jwtToken);
          sessionStorage.setItem('user', newUser)
          setUserData({isAuthenticated: true });
          window.location.reload(false); 
        } else {
          setUserData({ open: true });
        }
      })
      .catch((err) => console.error(err));
  };

  if (userData.isAuthenticated === true) {
    return <Container />;
    }
    else if(JSON.parse(sessionStorage.getItem('user'))){
      return <Container/>
    }
    else {
    return (
      <div id="login" className="container-fluid p-5 bg-light bg-gradient vh-100">
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <div className="form-group m-2">
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="username"
                  />
                </div>
                <div className="form-group m-2">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                <input
                  type="submit"
                  name="submit"
                  onClick={login}
                  className="btn btn-info btn-md my-2 p-2 w-50"
                  value="Login"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
