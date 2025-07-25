import Aside from "./components/Aside"
import Inscription from "./components/Inscription"

export default function App() {
  return (
    <div className="flex lg:px-[4vw] lg:pt-[3vh] overflow-y-hidden">
      <Aside/>
      <Inscription/>
    </div>

  )
}