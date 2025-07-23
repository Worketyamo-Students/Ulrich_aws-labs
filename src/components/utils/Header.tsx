import React from "react";
import Logo from "./Logo";

type HeaderProps = {
  title: string;
  description?: string; // facultative
};

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="flex flex-col items-center gap-5 pb-4">
        <Logo/>
        <div className="flex flex-col items-center gap-1">
            <h1 className="text-[24px] font-bold text-title1">{title}</h1>
            <p className="text-[16px] text-gris font-400 ">{description}</p>
        </div>
    </header>
  );
};



export default Header;
