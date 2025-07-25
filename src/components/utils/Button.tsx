import React from "react"
import { Link } from "react-router-dom"
type buttonProps = {
    text: string;
    link: string
}

const Button: React.FC<buttonProps> = ({ text, link }) => {
    return (
        <button className="flex mt-[3vh] justify-center items-center pt-1  bg-bgbutton text-button shadow-sm gap-1 w-full px-1 h-[5.2vh] rounded-[6px] text-[12px] lg:text-[1.2vw] hover:shadow-bgbutton/100">
            <Link to={link} className="w-full h-full text-center">
                {text}
            </Link>
        </button>
    )
}

export default Button