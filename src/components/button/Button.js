import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
  ) : (
    children
  );

  let defaultClassName =
    "flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px] ";
  switch (rest.kind) {
    case "primary":
      defaultClassName += "bg-primary text-white";
      break;
    case "secondary":
      defaultClassName += "bg-secondary text-white";
      break;
    case "ghost":
      defaultClassName += "bg-secondary text-secondary bg-opacity-10";
      break;
    default:
      break;
  }

  if (rest.href)
    return (
      <Link to={rest.href} className={`${defaultClassName} ${className}`}>
        {children}
      </Link>
    );

  return (
    <button
      className={`${className} ${defaultClassName}`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propsType = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
