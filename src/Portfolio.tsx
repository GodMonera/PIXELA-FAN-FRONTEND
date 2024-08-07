import React, { useState, useRef } from "react";
import AshyraPic from "/src/assets/1.jpg";
import AmiPic from "/src/assets/2.jpg";
import DebirunPic from "/src/assets/3.jpg";
import MildrPic from "/src/assets/4.jpg";
import TsururuPic from "/src/assets/5.jpg";
import XonebuPic from "/src/assets/6.jpg";
//import { Navbar } from "flowbite-react";

interface Animation {
  name: string;
  position: number;
}

const animations: Animation[] = [
  { name: "animation1" ,position : 1},
  { name: "animation2" ,position : 2},
  { name: "animation3" ,position : 3},
  { name: "animation4" ,position : 4},
  { name: "animation5" ,position : 5},
  { name: "animation6" ,position : 6},
];

function Portfolio() {
  const [activeAnimation, setActiveAnimation] = useState<string>(
    animations[0].name
  );
  const targetRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (animationName: string) => {
    console.log(animationName);
    setActiveAnimation(animationName);
  };

  return (
    <div className="min-h-screen">
      <div className="banner ">
        <div
          className="slider "
          ref={targetRef}
          style={
            {
              "--quantity": "6",
              "--animation-name": activeAnimation,
            } as React.CSSProperties
          }
        >
          <div
            className="item rounded-md"
            style={{ "--position": "1" } as React.CSSProperties}
          >
            <img src={AshyraPic} alt="Ashyra" className="img" />
          </div>
          <div
            className="item"
            style={{ "--position": "2" } as React.CSSProperties}
          >
            <img src={AmiPic} alt="Ami" className="img" />
          </div>
          <div
            className="item"
            style={{ "--position": "3" } as React.CSSProperties}
          >
            <img src={DebirunPic} alt="Debirun" className="img" />
          </div>
          <div
            className="item"
            style={{ "--position": "4" } as React.CSSProperties}
          >
            <img src={MildrPic} alt="Mildr" className="img" />
          </div>
          <div
            className="item"
            style={{ "--position": "5" } as React.CSSProperties}
          >
            <img src={TsururuPic} alt="Tsururu" className="img" />
          </div>
          <div
            className="item"
            style={{ "--position": "6" } as React.CSSProperties}
          >
            <img src={XonebuPic} alt="Xonebu" className="img" />
          </div>
        </div>
      </div>

      {animations.map((animation, index) => (
        <button key={index} onClick={() => handleButtonClick(animation.name)} style={{ "--current-position": animation.position } as React.CSSProperties}>
          {animation.name}
        </button>
      ))}
    </div>
  );
}

export default Portfolio;
