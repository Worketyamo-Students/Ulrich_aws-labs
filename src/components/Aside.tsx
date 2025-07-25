import Timeline from "./utils/Timeline"
import Worketyamo from "./utils/Worketyamo"
import Separate from "./utils/Separate"
import Footer2 from "./utils/Footer2"


export default function Aside() {
  return (
    <div className="hidden h-[95vh] lg:flex flex-1  flex-col justify-between">
      <div className="">
        <Worketyamo />
        <Timeline image="user" titre="Inscription" description="Entrez vos informations personelles" />
        <Separate />
        <Timeline image="mail" titre="Inscription" description="Entrez vos informations personelles" />
        <Separate />
        <Timeline image="add-team" titre="Inscription" description="Entrez vos informations personelles" />
        <Separate />
        <Timeline image="rocket-stroke-black" titre="Inscription" description="Entrez vos informations personelles" />
      </div>
      <Footer2/>
    </div>
  )
}