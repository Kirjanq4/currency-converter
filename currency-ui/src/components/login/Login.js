import React, { useState, useEffect } from "react";
import Container from "../container/Container";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    isAuthenticated: false,
    open: false,
  });
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    const existUser = sessionStorage.getItem('user')
    if(existUser) {
      const foundUser = JSON.parse(existUser);
      setLoggedUser(foundUser);
    }
  }, [])
  
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
          setLoggedUser(userData.username)
        
          
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
      <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="username"
                  />
                </div>
                <div className="form-group">
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
                  className="btn btn-info btn-md"
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
