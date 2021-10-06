import React from "react";

const Header = () => {

const Logout = () => {
  sessionStorage.clear()
  window.location.reload(false);
}

  return (
    <div>
      <h1>Currency Exchange App</h1>
      <button className="btn btn-danger" onClick={Logout}>Logout</button>
    </div>
  );
};

export default Header;
