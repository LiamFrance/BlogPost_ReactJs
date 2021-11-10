import React from "react";
import success from "../../images/success-icon.png";
import { Link } from "react-router-dom";
const LoginSuccess = () => {
  return (
    <div>
      <div className="members__item">
        <img src={success} alt="avt" className="members__avatar" />
        <h3 className="members__name" style={{ marginBottom: 20 }}>
          You have logged in successfully!
        </h3>
        <div className="Blog-post-block Blog-post-block--button">
          <Link to="/" className="Blog-Post-Button" style={{ float: "none" }}>
            BACK TO HOME <i className="fad fa-arrow-left" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccess;
