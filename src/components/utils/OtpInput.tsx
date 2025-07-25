import { useState } from "react"

export default function OtpInput(){

    const [otp, setOtp] = useState(new Array(4).fill(""))

    function change(element:React.ChangeEvent<HTMLInputElement>, index:number){
        if(isNaN(Number(element.target.value))) return false;

        setOtp([...otp.map((data,i)=>{return i===index? element.target.value:data})])

        if(element.target.value && element.target.nextSibling instanceof HTMLElement){
            element.target.nextSibling.focus()
        }
    }

    return (
        <div className="flex justify-between w-full">
            {
                otp.map((data, i)=>{
                    return <input type="text" value={data} maxLength={1} onChange={(e)=>change(e,i)} className="w-[20%] rounded-[6px] shadow-sm outline-none py-2 text-center border border-bord opacity-50 focus:border-2 focus:border-title1 focus:opacity-90" />
                })
            }
        </div>
    )
}