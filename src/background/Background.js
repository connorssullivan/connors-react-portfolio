// Import React and the stylesheet for background styling
import React from "react";
import "../styles/background.css";

// Import video and fallback image for the background
import video from "../assets/bg-universe.mp4";
import fallbackImage from "../assets/fallback-image.png";

// Define the Background functional component
const Background = () => {
    return (
      <>
      {/* Shadow overlay to enhance visibility of content */}
        <div className="shadow-overlay"></div>
        <video
          playsInline // Enable inline playback on iOS
          autoPlay // Automatically start playback
          muted // Mute the video
          loop // Loop the video continuously
          preload="auto" // Preload video for optimal performance
          id="bg" // Unique identifier for the video element
          poster={fallbackImage} // Fallback image displayed before video loads
        >
            {/* Source element specifying the video source and type */}
          <source src={video} type="video/mp4" />
        </video>
      </>
    );
  };
  
// Export the Background 
  export default Background;