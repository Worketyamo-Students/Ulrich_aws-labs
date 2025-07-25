import React from "react";

type timelineProps = {
    image: string;
    titre: string;
    description: string
}

const Timeline: React.FC<timelineProps> = ({ image, titre, description }) => {

    return (
        <div className="flex items-center gap-2 h-[6vh]">

                <div className="flex items-center  justify-center border-[1px] border-bord opacity-50 shadow-sm rounded-[6px] w-[4vw] h-full">
                    <img className="w-[2vw] h-[3vh]" src={`/${image}.svg`} alt="user" />
                </div>
                
            <div className="flex flex-col text-grisweb opacity-50 text-[1vw]">
                <h1 className="text-grisweb ">{titre}</h1>
                <h3 className="">{description}</h3>
            </div>
        </div>
    )

}

export default Timeline