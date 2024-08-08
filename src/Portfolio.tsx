import React, { useState, useRef } from "react";
import AmiPic from "/src/assets/1.jpg";
import XonebuPic from "/src/assets/2.jpg";
import TsururuPic from "/src/assets/3.jpg";
import MildrPic from "/src/assets/4.jpg";
import DebirunPic from "/src/assets/5.jpg";
import AshyraPic from "/src/assets/6.jpg";
import NavigationBar from "./NavigationBar";
import logo from "/src/assets/logo.jpg";
interface Animation {
  name: string;
  position: number;
}

const animations: Animation[] = [
  { name: "Ami", position: 1 },
  { name: "Xonebu", position: 2 },
  { name: "Tsururu", position: 3 },
  { name: "Mild-R", position: 4 },
  { name: "Debirun", position: 5 },
  { name: "Ashyra", position: 6 },
];

function Portfolio() {
  const [activeAnimation, setActiveAnimation] = useState<string>(
    animations[0].name
  );
  const [position, setposition] = useState(1);

  const targetRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (animation: Animation) => {
    setActiveAnimation(animation.name);
    setposition(animation.position);
    console.log(animation.position);
  };

  return (
    <div className="min-h-screen">
      <NavigationBar />

      <div className="logo">
        <img src={logo} className="img" />
      </div>

      <div className="banner ">
        <div
          className="slider "
          ref={targetRef}
          style={
            {
              "--quantity": "6",
              "--animation-name": activeAnimation,
              "--current-position": position,
            } as React.CSSProperties
          }
        >
          <div
            className="item rounded-md"
            style={{ "--position": "1" } as React.CSSProperties}
          >
            <img src={AshyraPic} className="img" />
          </div>
          <div
            className="item"
            style={{ "--position": "2" } as React.CSSProperties}
          >
            <img src={DebirunPic} className="img" />
          </div>
          <div
            className="item"
            style={{ "--position": "3" } as React.CSSProperties}
          >
            <img src={MildrPic} className="img" />
          </div>

          <div
            className="item"
            style={{ "--position": "4" } as React.CSSProperties}
          >
            <img src={TsururuPic} className="img" />
          </div>
          <div
            className="item"
            style={{ "--position": "5" } as React.CSSProperties}
          >
            <img src={XonebuPic} className="img" />
          </div>
          <div
            className="item"
            style={{ "--position": "6" } as React.CSSProperties}
          >
            <img src={AmiPic} className="img" />
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-10 gap-4 mx-5">
        {animations.map((animation, index) => (
          <button
            className=" basis-1/4 border-2 rounded-lg p-1 gap-2 transform transition-transform hover:scale-105"
            key={index}
            onClick={() => handleButtonClick(animation)}
          >
            {animation.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
