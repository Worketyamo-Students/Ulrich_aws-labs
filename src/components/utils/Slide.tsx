import React from "react";


type SliderProps = {
  color1: string;
  color2?: string;
  color3?: string;
  color4?: string;
};

const Slide: React.FC<SliderProps> = ({ color1, color2, color3, color4 }) => {
  return (
    <div className="w-full flex gap-2">
      <div className={`flex-1 h-1 lg:h-[5px] rounded-[20px] ${color1}`}></div>
      <div className={`flex-1 h-1 lg:h-[5px] rounded-[20px] ${color2 || "bg-[#D9D9D9]"}`}></div>
      <div className={`flex-1 h-1 lg:h-[5px] rounded-[20px] ${color3 || "bg-[#D9D9D9]"}`}></div>
      <div className={`flex-1 h-1 lg:h-[5px] rounded-[20px] w-full ${color4 ? `${color4}` : "bg-[#D9D9D9]"}`}></div>
    </div>
  );
};

export default Slide