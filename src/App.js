import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import { scroller } from "react-scroll";

function App() {
  const scrollDown = () => {
    scroller.scrollTo("sec2", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="App">
      <Section1 scrollDown={scrollDown} />
      <div id="sec2">
        <Section2 />
      </div>
    </div>
  );
}

export default App;
