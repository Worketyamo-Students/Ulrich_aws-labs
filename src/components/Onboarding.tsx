import Header from "./utils/Header"
import Button from "./utils/Button"
import Footer1 from "./utils/Footer1"
import Slide from "./utils/Slide"
import Image from "./utils/Image"

export default function Onboarding() {
  return (
    <div className="flex-1 h-[100vh]  lg:h-[95vh] mx-8 lg:mx-[4vw]  py-[4vh] lg:pl-[15vw] lg:py-0  font-inter flex flex-col justify-between"> {/*h-[100vh] justify-between" */}
      <div className="">
        <Header title="Bienvenue" description="Plus que 3 petites minutes ........" />
        <Image/>
        <Button text="creer le compte" />
        <Footer1 />
      </div>
      <Slide />

    </div>
  )
}