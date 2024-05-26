import React from "react";

const Loading = () => {
  return (
    <div className="overlay flex items-center justify-center min-h-screen">
      <div className="loader relative font-mono font-bold text-2xl">
        <span className="absolute inset-0 text-transparent bg-clip-text">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
