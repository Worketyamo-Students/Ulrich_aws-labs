import React from "react";

type iconsProps = {
    nom1: string;
    nom2: string
}

const Icons: React.FC<iconsProps> = ({ nom1, nom2 }) => {
    return (
        <div className="flex flex-col gap-6 mt-6">
            <div className="flex gap-2 items-center justify-between"> {/* divider */}
                <div className="w-[30%] h-[1px] bg-bord"></div>
                <h3 className="text-gris text-[12px]">OU AVEC</h3>
                <div className="w-[30%] h-[1px] bg-bord"></div>
            </div>
            <div className="flex flex-col gap-3"> {/*icons*/}
                <div className="flex justify-center shadow-sm gap-1 w-full px-1 py-1 rounded-[6px] text-[16px] text-title2 border-[1px] border-bord">
                    <img src={`/${nom1}.svg`} alt={nom1} />
                    <a>{nom1}</a>
                </div>
                <div className="flex justify-center shadow-sm gap-1 w-full px-1 py-1 rounded-[6px] text-[16px] text-title2 border-[1px] border-bord">
                    <img src={`/${nom2}.svg`} alt={nom2} />
                    <a>{nom2}</a>
                </div>
            </div> 
        </div>
    )
}

export default Icons