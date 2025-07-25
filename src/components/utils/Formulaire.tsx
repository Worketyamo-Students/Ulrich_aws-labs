import React from "react";

type FormProps = {
    label?: string;
    placeholder: string
    type: string
}

const Formulaire: React.FC<FormProps> = ({ label, placeholder, type }) => {

    return (
        <form action="" className="mt-[0.5vh] pb-1 flex flex-col lg:gap-1">
            <label className="text-[12px] lg:text-[1.2vw] text-title2 font-medium">{label}</label>
            <div className="w-full shadow-sm px-1 lg:h-[5vh] py-1 rounded-[6px] text-gris border-[1px] border-bord text-[10px] lg:text-[1.1vw]">
                <input className="w-full h-full flex items-center outline-none " type={type} name="" id="" placeholder={placeholder} />
            </div>
        </form>
    )
}


export default Formulaire