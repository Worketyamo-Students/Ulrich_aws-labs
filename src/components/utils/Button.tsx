import React from "react"

type buttonProps = {
    text: string
}

const Button: React.FC<buttonProps> = ({ text }) => {
    return (
        <button className="flex mt-[3vh] justify-center items-center text-center  bg-bgbutton text-button shadow-sm gap-1 w-full px-1 h-[5.2vh] rounded-[6px] text-[12px] lg:text-[1.2vw] border-[1px]">
            {text}
        </button>
    )
}

export default Button