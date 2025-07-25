export default function Footer2(){
    return(
        <div className="flex justify-between items-center text-bgbutton text-[1vw] font-bold">
            <a className="flex gap-1 items-center">
                <img src="/arrow.svg" alt="arrow" />
                <span className="hover:underline">vos details</span>
            </a>
            <a className="hover:underline">Signin</a>
        </div>
    )
}