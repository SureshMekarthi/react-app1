import styles from "./Button.module.css";
import { IoIosHeartEmpty } from "react-icons/io";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    // <button
    //   className={[styles.btn, styles["btn-" + color]].join(" ")}
    //   onClick={onClick}
    // >
    //   {children}
    // </button>
    <IoIosHeartEmpty onClick={onClick} />
  );
}

export default Button;
