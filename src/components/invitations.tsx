import Header from "./utils/Header"
import Formulaire from "./utils/Formulaire"
import Button from "./utils/Button"
import Footer1 from "./utils/Footer1"
import Slide from "./utils/Slide"


export default function Invitation() {
  return (
    <div className="px-[5%] py-[15%] font-inter flex flex-col gap-20"> {/*h-[100vh] justify-between" */}
      <div className="">
        <Header title="Finalisation" description="Invitez 4 amis pour finaliser" />
        <Formulaire label="Numeros de telephone" placeholder="Numero whatsapp" type="text" />
        <Formulaire placeholder="Numero whatsapp" type="text"/>
        <Formulaire placeholder="Numero whatsapp" type="text"/>
        <Formulaire placeholder="Numero whatsapp" type="text"/>
        <Button text="creer le compte" />
        <Footer1 />
      </div>
      <Slide />
    </div>
  )
}