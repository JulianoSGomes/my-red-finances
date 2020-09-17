import styles from "./Checkbox.module.css";
import clsx from "clsx";

const Checkbox = ({ label, name, helperText, error }) => {
  return (
    <label>
      {label}
      <input name={name} type="checkbox" value="" />
    </label>
  );
};

export default Checkbox;
