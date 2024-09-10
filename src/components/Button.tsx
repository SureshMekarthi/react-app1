import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <button
      className={[styles.btn, styles.btnPrimary].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
