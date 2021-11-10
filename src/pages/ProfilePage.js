import React from "react";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import "../css/ProfilePage.css";
import avatar from "../images/team-1.jpeg";
const ProfilePage = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
    console.log(localStorage.getItem("TOKEN"));
  };

  return (
    <div>
      <Header title="ProfilePage" />
      <div className="members__item">
        <img src={avatar} alt="avt" className="members__avatar" />
        <h3 className="members__name">Walter White</h3>
        <p className="members__position">Chief Executive Officer</p>
        <p className="members__intro">
          Magni qui quod omnis unde et eos fuga et exercitationem. Odio
          veritatis perspiciatis quaerat qui aut aut aut
        </p>
        <div className="members__social">
          <i className="fab fa-twitter" aria-hidden="true" />
          <i className="fab fa-facebook" aria-hidden="true" />
          <i className="fab fa-instagram" aria-hidden="true" />
          <i className="fab fa-linkedin" aria-hidden="true" />
        </div>
      </div>
      <button className="btn__logout" onClick={() => logout()}>
        LOG OUT
      </button>
      <Footer />
    </div>
  );
};

export default ProfilePage;
