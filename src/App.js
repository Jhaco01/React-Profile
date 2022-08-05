import { MyAbout } from "./components/MyAbout";
import { MyInfo } from "./components/MyInfo";
import { MyFooter } from "./components/MyFooter";

export function App() {
  return (
    <div className="app">
      < MyInfo />
      < MyAbout />
      < MyFooter />
    </div>
  )
}