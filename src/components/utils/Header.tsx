import React from "react";
import Logo from "./Logo";

type HeaderProps = {
  title: string;
  description?: string; // facultative
};

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="flex flex-col items-center gap-[2vh] pb-[2vh]">
        <Logo/>
        <div className="flex flex-col items-center gap-1">
            <h1 className="text-[2vw] font-bold text-title1">{title}</h1>
            <p className="text-[1vw] text-gris font-400 ">{description}</p>
        </div>
    </header>
  );
};



export default Header;
