import Header from "./utils/Header"
import Button from "./utils/Button"
import Footer1 from "./utils/Footer1"
import Slide from "./utils/Slide"
import Image from "./utils/Image"

export default function Onboarding() {
  return (
    <div className="px-[5%] py-[15%] font-inter flex flex-col gap-20"> {/*h-[100vh] justify-between" */}
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