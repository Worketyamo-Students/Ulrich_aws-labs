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
        <div className="flex flex-col items-center lg:gap-1">
            <h1 className="text-[20px] lg:text-[2vw] font-bold text-title1">{title}</h1>
            <p className="lg:text-[1vw] text-[12px] text-gris font-400 ">{description}</p>
        </div>
    </header>
  );
};



export default Header;
