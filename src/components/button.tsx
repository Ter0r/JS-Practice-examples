import React from "react";
type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends buttonProps {
  onClick?: (event?: any) => void;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children
}) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);
