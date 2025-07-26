import React from "react"
import { NavLink } from "react-router-dom"
type buttonProps = {
    text: string;
    link: string
}

const Button: React.FC<buttonProps> = ({ text, link }) => {
    return (
        <button className="flex mt-5  justify-center items-center  bg-bgbutton text-button shadow-sm gap-1 w-full px-1 lg:h-[5vh] py-1 rounded-[6px] text-[12px] lg:text-[1.2vw] hover:shadow-bgbutton/100">
            <NavLink to={link} className="w-full h-full text-center">
                {text}
            </NavLink>
        </button>
    )
}

export default Button