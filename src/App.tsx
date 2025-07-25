import Aside from "./components/Aside"
// import Inscription from "./components/Inscription"
// import Invitation from "./components/invitations"
import Onboarding from "./components/Onboarding"



export default function App() {
  return (
    <div className="flex lg:px-[4vw] lg:pt-[3vh] overflow-y-hidden">
      <Aside/>
      <Onboarding/>
    </div>

  )
}