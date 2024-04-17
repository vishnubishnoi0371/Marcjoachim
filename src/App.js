import "./App.css";
import About from "./components/About";
import Fight from "./components/Fight";
import Herosec from "./components/Herosec";
import LiveCoaching from "./components/LiveCoaching";
import MindsetSwiper from "./components/MindsetSwiper";
import MyFooter from "./components/MyFooter";
import ProcessWork from "./components/ProcessWork";
import Request from "./components/Request";
import TargetGroup from "./components/TargetGroup";
import Youget from "./components/Youget";
import Yourex from "./components/Yourex";
import Yourfault from "./components/Yourfault";

function App() {
  return (
    <div>
      <Herosec />
      <Yourfault />
      <Fight />
      <Youget />
      <LiveCoaching/>
      <TargetGroup/>
      <MindsetSwiper/>
      <Yourex />
      <About />
      <Request />
      <ProcessWork />
      <MyFooter />
    </div>
  );
}

export default App;
