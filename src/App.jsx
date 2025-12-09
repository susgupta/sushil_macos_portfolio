import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Welcome, Navbar, Dock } from "#components";
import { Terminal } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  )
}

export default App