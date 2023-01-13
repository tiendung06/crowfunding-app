import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
const Input = ({
  control,
  name,
  type = "text",
  error = "",
  children,
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border border-strock rounded-xl text-text1 dark:text-white placeholder:text-text4 dark:placeholder:text-text2 bg-transparent ${
          error.length > 0
            ? "border-error"
            : "border-strock dark:border-darkStroke"
        } ${children ? "pr-16" : ""}`}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="text-sm font-medium text-error">{error}</span>
      )}
      {children && (
        <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {children}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
