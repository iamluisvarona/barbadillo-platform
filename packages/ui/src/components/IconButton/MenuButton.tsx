import { IconButton, type IconButtonProps } from "./IconButton";
import "./MenuButton.css";

export function MenuButton(props: Omit<IconButtonProps, "children">) {
  return (
    <IconButton aria-label="Abrir menú" {...props}>
      <span className="bb-menu-button__icon" />
    </IconButton>
  );
}