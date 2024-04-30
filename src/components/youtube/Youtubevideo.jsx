'use client'
import YouTube from "react-youtube"; 
export const Youtubevideo = () => {
    const opts = { 
        height: "250", 
        width: "500", 
        playerVars: { 
          autoplay: 1, 
        }, 
      }; 
  return (
    <div>
        <YouTube videoId="tBCVYV_2bFY" 
            opts={opts} /> 
      </div> 
  )
}
