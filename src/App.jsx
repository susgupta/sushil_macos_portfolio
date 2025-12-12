import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Welcome, Navbar, Dock } from "#components";
import { Finder, Image, Resume, Safari, Terminal, Text } from "#windows";

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
      <Text />
      <Image />
    </main>
  )
}

export default App