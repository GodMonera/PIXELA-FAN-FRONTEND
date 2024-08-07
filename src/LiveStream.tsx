import React from "react";
import { useState } from "react";

function LiveStream() {
  return (
    <div className="flex items-center justify-center">
      <div className="search-container">
        <form className="flex gap-2">
          <input 
            type="text" 
            className="px-4 py-2 border rounded-full" 
            placeholder="Search..." 
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700"
          >
            Find
          </button>
        </form>
      </div>
    </div>
  );
}

export default LiveStream;
