import Timeline from "./utils/Timeline"
import Worketyamo from "./utils/Worketyamo"
import Separate from "./utils/Separate"
import Footer2 from "./utils/Footer2"


export default function Aside() {
  return (
    <div className="hidden h-[95vh] lg:flex flex-1  flex-col justify-between">
      <div className="">
        <Worketyamo />
        <div className="Timeline">
          <Timeline image="user" titre="Inscription" description="Entrez vos informations pour vous inscrire"/>
          <Separate/>
        </div>
        <div className="Timeline">
          <Timeline image="mail" titre="Inscription" description="Entrez vos informations pour vous inscrire"/>
          <Separate/>
        </div>
        <div className="Timeline">
          <Timeline image="add-team" titre="Inscription" description="Entrez vos informations pour vous inscrire"/>
          <Separate/>
        </div>
        <div className="">
          <Timeline image="rocket-stroke-black" titre="Inscription" description="Entrez vos informations pour vous inscrire"/>
        </div>
      </div>
      <Footer2/>
    </div>
  )
}