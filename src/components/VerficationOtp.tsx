import Header from "./utils/Header"
import Button from "./utils/Button"
import Footer1 from "./utils/Footer1"
import Slide from "./utils/Slide"
import OtpInput from "./utils/OtpInput"

export default function VerificationOtp() {
  return (
    <div className="flex-1 h-[100vh] lg:h-[95vh] mx-8 lg:mx-[4vw] pb-5  lg:pl-[15vw] lg:pb-[2vh]  font-inter flex flex-col items-center justify-between">
      <div className=" h-4/5 flex flex-col justify-center">
        <Header title="Bienvenue" description="Plus que 3 petites minutes ........" />
        <OtpInput/>
        <Button text="creer le compte" link="/invitation" />
        <Footer1 />
      </div>
      <Slide color1="bg-orange-300" color2="bg-orange-400" />

    </div>
  )
}