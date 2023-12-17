import {useRef} from 'react'

const Video6 = () => {
  const videoRef = useRef(null);
  return (
    <>
      <div >
        <div
          style={{
            position: "relative",
            maxWidth: "76vw",
            margin:"auto",
            boxSizing: "border-box",
            padding: "10px",
            
          }}
        >
          <video ref={videoRef} controls width="100%">
            <source src="../public/Videos/E-7.mkv" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default Video6