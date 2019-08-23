import React, {ChangeEvent, RefForwardingComponent} from "react";
import { Button } from "./button";
import inputRef from "../app";

type inputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface SearchFieldProps extends inputProps {
  onChange: (event: ChangeEvent) => void;
  onSubmit: (event: any) => void;
  children?: React.ReactNode;
  ref: RefForwardingComponent<inputProps>;
}

export const Search = React.forwardRef((props: SearchFieldProps) => (
  <form onSubmit={props.onSubmit}>
    <label htmlFor="searchInput">{props.children}</label>
    <input id="searchInput" type="text" onChange={props.onChange} ref={inputRef} />
    <Button type="submit" onClick={props.onSubmit}>
      Submit
    </Button>
  </form>
));
