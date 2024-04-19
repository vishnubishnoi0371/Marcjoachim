import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Backtotop from "./components/Backtotop";
import Clintswiper from "./components/Clintswiper";
import Fight from "./components/Fight";
import Herosec from "./components/Herosec";
import LiveCoaching from "./components/LiveCoaching";
import MindsetSwiper from "./components/MindsetSwiper";
import MyFooter from "./components/MyFooter";
import Preload from "./components/Preload";
import ProcessWork from "./components/ProcessWork";
import Request from "./components/Request";
import TargetGroup from "./components/TargetGroup";
import Youget from "./components/Youget";
import Yourex from "./components/Yourex";
import Yourfault from "./components/Yourfault";

function App() {
  const [first, setfirst] = useState(true);
  useEffect(() => {
    setfirst(true);
    setTimeout(() => {
      setfirst(false);
    }, 3000);
  }, []);
  return (
    <>
      {first ? (
        <>
          <Preload />
        </>
      ) : (
        <div className=" overflow-hidden">
          <Backtotop />

          <Herosec />
          <Yourfault />
          <Fight />
          <Youget />
          <LiveCoaching />
          <TargetGroup />
          <MindsetSwiper />
          <Yourex />
          <About />
          <Clintswiper />
          <Request />
          <ProcessWork />
          <MyFooter />
        </div>
      )}
    </>
  );
}

export default App;
