import * as React from "react";
import { useNavigate } from "react-router";

interface Props {
  bold?: boolean;
  href: string;
  social?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function NavbarLink(props: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    const link = props.href;
    if (link.startsWith("http")) {
      // it is an external link
      window.open(link);
    } else {
      navigate(link);
    }
  };

  return (
    <div
      className={`cursor-pointer hover:scale-110 transition duration-300 ${
        props.bold && "font-bold"
      } ${props.social && "hover:rotate-360"}`}
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
}

export default NavbarLink;
