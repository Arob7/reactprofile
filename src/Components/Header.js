import React from "react";
import profile from "../images/profile-pic.jpg";

function Header() {
  return (
    <>
      <img src={profile} className="profile-pic" alt="profile picture" />
    </>
  );
}

export default Header;
