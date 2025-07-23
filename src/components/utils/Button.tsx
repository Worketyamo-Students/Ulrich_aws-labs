import React from "react"

type buttonProps = {
    text: string
}

const Button: React.FC<buttonProps> = ({ text }) => {
    return (
        <button className="flex mt-6 justify-center bg-bgbutton text-button shadow-sm gap-1 w-full px-1 py-1 rounded-[6px] text-[16px] border-[1px]">
            {text}
        </button>
    )
}

export default Button