import Header from "./components/utils/Header"
import Formulaire from "./components/utils/Formulaire"
import Validation from "./components/utils/Validation"
import Icons from "./components/utils/Icons"
import Button from "./components/utils/Button"
import Footer1 from "./components/utils/Footer1"
import Slide from "./components/utils/Slide"


export default function App() {
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