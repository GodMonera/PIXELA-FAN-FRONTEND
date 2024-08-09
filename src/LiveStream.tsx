import React from "react";
import { useState } from "react";
import LiveCard from "./LiveCard";
import NavigationBar from "./NavigationBar";

function LiveStream() {
  return (
    <div>
      <NavigationBar />
      <div className="category gap-2 flex"></div>

      <div className="container mx-auto p-10">
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
