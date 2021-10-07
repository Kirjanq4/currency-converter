import React, { useState, useEffect } from "react";

const Header = () => {

  const [showLogout, setShowLogout] = useState(false);
  
  useEffect(() => {
    if(JSON.parse(sessionStorage.getItem('user'))) {
      setShowLogout(true)
    }
  },[])

  const Logout = () => {
    sessionStorage.clear()
    window.location.reload(false);
  }

  return (
    <div className="container-fluid bg-dark bg-gradient text-light text-center p-2">
      <div className="row">
        <h1 className="col-10">Currency Exchange App</h1>
          <div className="col p-1">
          {showLogout ? <button className="btn btn-danger" onClick={Logout}>Logout</button> : null}
            </div>
          </div>
    </div>
  );
};

export default Header;
