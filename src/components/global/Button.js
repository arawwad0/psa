import React from "react";
import { bool, string } from "prop-types";
import classnames from "classnames";
import styles from "./Button.module.css";

const Button = ({ secondary, tertiary, large, className, ...props }) => {
  const classes = classnames(
    styles.button,
    { [styles.secondary]: secondary },
    { [styles.tertiary]: tertiary },
    { [styles.large]: large },
    { [className]: className }
  );
  return <button className={classes} {...props}></button>;
};

Button.propTypes = {
  secondary: bool,
  tertiary: bool,
  large: bool,
  className: string,
};

Button.defaultProps = {
  secondary: false,
  tertiary: false,
  large: false,
  className: ""
};

export default Button;
