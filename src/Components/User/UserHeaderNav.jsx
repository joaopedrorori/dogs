import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext.jsx";
import MyPicturesSVG from "../../Assets/feed.svg?react";
import StatsSVG from "../../Assets/stats.svg?react";
import NewPostSVG from "../../Assets/newPost.svg?react";
import LogOutSVG from "../../Assets/logout.svg?react";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia.jsx";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate("/login");
  }
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
