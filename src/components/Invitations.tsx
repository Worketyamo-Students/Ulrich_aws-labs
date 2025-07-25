import Header from "./utils/Header"
import Formulaire from "./utils/Formulaire"
import Button from "./utils/Button"
import Footer1 from "./utils/Footer1"
import Slide from "./utils/Slide"


export default function Invitation() {
  return (
    <div className="flex-1 h-[100vh]  lg:h-[95vh] mx-8 lg:mx-[4vw]  py-[4vh] lg:pl-[15vw] lg:py-0  font-inter flex flex-col justify-between">
      <div className="">
        <Header title="Finalisation" description="Invitez 4 amis pour finaliser" />
        <Formulaire label="Numeros de telephone" placeholder="Numero whatsapp" type="text" />
        <Formulaire placeholder="Numero whatsapp" type="text"/>
        <Formulaire placeholder="Numero whatsapp" type="text"/>
        <Formulaire placeholder="Numero whatsapp" type="text"/>
        <Formulaire placeholder="Numero whatsapp" type="text"/>
        <Button text="creer le compte" link="/onboarding" />
        <Footer1 />
      </div>
      <Slide color1="bg-orange-300" color2="bg-orange-400" color3="bg-gradient-to-r from-orange-400 to-blue-800" />
    </div>
  )
}