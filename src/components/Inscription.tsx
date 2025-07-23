import Header from "./utils/Header"
import Formulaire from "./utils/Formulaire"
import Validation from "./utils/Validation"
import Icons from "./utils/Icons"
import Button from "./utils/Button"
import Footer1 from "./utils/Footer1"
import Slide from "./utils/Slide"


export default function Inscription() {
  return (
    <div className="px-[5%] py-[15%] font-inter flex flex-col gap-20"> {/*h-[100vh] justify-between" */}
      <div className="">
        <Header title="Creation de compte" description="Rentrez vos infos pour creer votre compte" />
        <Formulaire label="Email" placeholder="abc@exemple.com" />
        <Formulaire label="Mot de passe" placeholder="**********" />
        <Validation />
        <Icons nom1="Github" nom2="Google" />
        <Button text="creer le compte" />
        <Footer1 />
      </div>
      <Slide />
    </div>
  )
}