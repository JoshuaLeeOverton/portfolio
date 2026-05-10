import styles from './button.module.css'

type ButtonProps=  {
  label: string
}

export function Button({label}: ButtonProps) {
  return (
    <button className={styles['btn']}>{label}</button>
  );
}

export default Button;
