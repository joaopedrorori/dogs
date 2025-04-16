import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext.jsx";
import MyPicturesSVG from "../../Assets/feed.svg?react";
import StatsSVG from "../../Assets/stats.svg?react";
import NewPostSVG from "../../Assets/newPost.svg?react";
import LogOutSVG from "../../Assets/logout.svg?react";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate("/login");
  }
  const [mobile, setMobile] = React.useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end>
        <MyPicturesSVG />
        {mobile && "My Posts"}
      </NavLink>
      <NavLink to="/account/stats">
        <StatsSVG />
        {mobile && "Statistics"}
      </NavLink>
      <NavLink to="/account/post">
        <NewPostSVG />
        {mobile && "New Post"}
      </NavLink>
      <button onClick={handleLogout}>
        {" "}
        <LogOutSVG />
        {mobile && "LogOut"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
