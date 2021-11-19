import React from "react";
import { Button } from "react-bootstrap";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, signInUsingGoogle, logOut } = useFirebase();
  return (
    <div className="header">
      <img
        className="header-image"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="/"
      />
      <div>
        {user.displayName ? (
          <Button className="btn btn-dark" onClick={logOut}>
            Sign Out
          </Button>
        ) : (
          <Button className="btn btn-dark" onClick={signInUsingGoogle}>
            Sign In With Google
          </Button>
        )}
        {user.displayName && (
          <span className="text-dark">
            {" "}
            <span className="mx-3">Hi</span> {user.displayName}
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
