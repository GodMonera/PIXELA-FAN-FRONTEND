import React from "react";
import { useState } from "react";
import LiveCard from "./LiveCard";
import NavigationBar from "./NavigationBar";

function LiveStream() {
  return (
    <div>
      <NavigationBar />
      <div className="category gap-2 flex">
        <button>Gaming</button>
        <button>Cooking</button>
        <button>IRL</button>
      </div>

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <LiveCard
            imageUrl={"https://via.placeholder.com/300x200"}
            title={"Title"}
            description={"Description"}
          />
          <LiveCard
            imageUrl={"https://via.placeholder.com/300x200"}
            title={"Title"}
            description={"Description"}
          />
          <LiveCard
            imageUrl={"https://via.placeholder.com/300x200"}
            title={"Title"}
            description={"Description"}
          />
          <LiveCard
            imageUrl={"https://via.placeholder.com/300x200"}
            title={"Title"}
            description={"Description"}
          />
        </div>
      </div>
    </div>
  );
}

export default LiveStream;
