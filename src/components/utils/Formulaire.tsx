import React from "react";

type FormProps = {
    label?: string;
    placeholder: string
    type: string
}

const Formulaire: React.FC<FormProps> = ({ label, placeholder, type }) => {

    return (
        <form action="" className="mt-2 flex flex-col gap-1">
            <label className="text-[16px] text-title2 font-medium">{label}</label>
            <div className="w-full shadow-sm px-1 py-1 rounded-[6px] text-gris border-[1px] border-bord text-[16px]">
                <input className="w-full outline-none " type={type} name="" id="" placeholder={placeholder} />
            </div>
        </form>
    )
}


export default Formulaire