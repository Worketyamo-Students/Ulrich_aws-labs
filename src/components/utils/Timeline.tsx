import React from "react";
import { Link } from "react-router-dom";


type timelineProps = {
    image: string;
    titre: string;
    description: string
    link: string
}

const Timeline: React.FC<timelineProps> = ({ image, titre, description, link }) => {

    return (
        <div className="flex items-center gap-2 h-[6vh]">

            <div className="flex items-center  justify-center border-[1px] border-title1  shadow-sm rounded-[6px] w-[4vw] h-full">
                <Link to={link} className="w-full h-full text-center flex items-center  justify-center">
                    <img className="w-[2vw] h-[3vh]" src={`/${image}.svg`} alt="user" />
                </Link>
            </div>

            <div className="flex flex-col font-semibold text-title1  text-[1vw]">
                <h1 className=""><Link to={link} className="w-full h-full text-center">
                    {titre}
                </Link></h1>
                <h3 className="">{description}</h3>
            </div>
        </div>
    )

}

export default Timeline