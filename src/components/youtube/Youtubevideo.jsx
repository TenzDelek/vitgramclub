'use client'
import YouTube from "react-youtube"; 
export const Youtubevideo = ({vids}) => {
  console.log(vids)
    const opts = { 
        height: "250", 
        width: "500", 
        playerVars: { 
          autoplay: 1, 
        }, 
      }; 
  return (
    <div>
        <YouTube videoId={vids}
            opts={opts} /> 
      </div> 
  )
}
