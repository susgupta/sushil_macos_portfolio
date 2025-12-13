import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Welcome, Navbar, Dock, Home } from "#components";
import { Contact, Finder, Image, Photo, Resume, Safari, Terminal, Text } from "#windows";

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
      <Contact />
      <Photo />

      <Home />
    </main>
  )
}

export default App