import PropTypes from "prop-types";
import { cn } from "../utils/cn";

export default function Button({ className }) {
  return (
    <button className={cn("bg-pink-500", "rounded-sm", className)}>
      Hello Button
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "",
};
