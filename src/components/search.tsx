import React, { ChangeEvent } from "react";
import { Button } from "./button";

type inputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface SearchFieldProps extends inputProps {
  value: string;
  onChange: (event: ChangeEvent) => void;
  onSubmit: (event: any) => void;
  children?: React.ReactNode;
}

export const Search: React.FC<SearchFieldProps> = ({
  value,
  onChange,
  onSubmit,
  children
}) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="searchInput">{children}</label>
    <input id="searchInput" type="text" value={value} onChange={onChange} />
    <Button type="submit" onClick={onSubmit}>
      Submit
    </Button>
  </form>
);
