import React from "react";
import { NavLink } from "react-router-dom";
import { arrayOf, shape, string } from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({ routes }) => (
  <div className={styles.navbar}>
    {routes.map((route) => (
      <NavLink
        key={route.url}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
        exact
        to={route.url}
      >
        {route.text}
      </NavLink>
    ))}
  </div>
);

const routeShape = shape({
  text: string.isRequired,
  url: string.isRequired,
});

Navbar.propTypes = {
  routes: arrayOf(routeShape),
};

export default Navbar;
