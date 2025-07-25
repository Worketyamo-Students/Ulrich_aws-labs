import Header from "./utils/Header"
import Formulaire from "./utils/Formulaire"
import Validation from "./utils/Validation"
import Icons from "./utils/Icons"
import Button from "./utils/Button"
import Footer1 from "./utils/Footer1"
import Slide from "./utils/Slide"


export default function Inscription() {
  return (
    <div className="flex-1  h-[95vh] mx-[4vw]  py-[4vh] lg:pl-[15vw] lg:py-0  font-inter flex flex-col justify-between"> {/*h-[100vh] justify-between" */}
      <div className="lg:py-4">
        <Header title="Creation de compte" description="Rentrez vos infos pour creer votre compte" />
        <Formulaire label="Email" placeholder="abc@exemple.com" type="email"/>
        <Formulaire label="Mot de passe" placeholder="**********" type="password"/>
        <Validation />
        <Icons nom1="Github" nom2="Google" />
        <Button text="creer le compte" />
        <Footer1 />
      </div>
      <Slide />
    </div>
  )
}