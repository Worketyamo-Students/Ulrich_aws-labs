import Header from "./utils/Header"
import Button from "./utils/Button"
import Footer1 from "./utils/Footer1"
import Image from "./utils/Image"
import Slide from "./utils/Slide"


export default function Onboarding() {
  return (
    <div className="flex-1 h-[100vh] lg:h-[95vh] mx-8 lg:mx-[4vw] pb-5  lg:pl-[15vw] lg:pb-[2vh]  font-inter flex flex-col items-center justify-between"> {/*h-[100vh] justify-between" */}
      <div className=" h-full flex flex-col justify-center">
        <Header title="Bienvenue" description="Plus que 3 petites minutes ........" />
        <Image />
        <Button text="creer le compte" />
        <Footer1 />
      </div>
      <Slide color1="bg-orange-300" color2="bg-orange-400" color3="bg-gradient-to-r from-orange-400 to-blue-800" color4="bg-[#00539C]" />
      {/* <Slide/> */}
    </div>
  )
}