import type React from "react";
import Nav from "./Nav";

interface pageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout (props: pageLayoutProps) {
  return (
    <div className="page">
    <Nav></Nav>
      {props.children}
    </div>
  );
}