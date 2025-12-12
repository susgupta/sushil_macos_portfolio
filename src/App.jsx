import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Welcome, Navbar, Dock } from "#components";
import { Finder, Resume, Safari, Terminal } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
    </main>
  )
}

export default App