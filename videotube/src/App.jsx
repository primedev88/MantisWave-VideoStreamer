import "./App.css";
import Home from "./components/Home.jsx"
import Video1 from "./components/Video1.jsx";
import Video2 from "./components/Video2.jsx"; 
import Video3 from "./components/Video3.jsx"; 
import Video4 from "./components/Video4.jsx"; 
import Video5 from "./components/Video5.jsx"; 
import Video6 from "./components/Video6.jsx"; 
import Video7 from "./components/Video7.jsx"; 
import Video8 from "./components/Video8.jsx"; 
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const App = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    backgroundColor: 'rgb(50, 168, 160)',
    padding: ' 1vh 1vh',
    margin:'1vh',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
  };
  
  const iconStyle = {
    marginRight: '1vh',
    // Add additional styles for the video icon, or replace with an actual SVG/icon component
  };
  
  return (
    <>
      <Router>
        <div className="screen">
          <div className="playlist">
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/Video1" style={linkStyle}> <span style={iconStyle}>🎥</span> Video 1</Link>
            <Link to="/Video2" style={linkStyle}> <span style={iconStyle}>🎥</span> Video 2</Link>
            <Link to="/Video3" style={linkStyle}> <span style={iconStyle}>🎥</span> Video 3</Link>
            <Link to="/Video4" style={linkStyle}> <span style={iconStyle}>🎥</span> Video 4</Link>
            <Link to="/Video5" style={linkStyle}> <span style={iconStyle}>🎥</span> Video 5</Link>
            <Link to="/Video6" style={linkStyle}> <span style={iconStyle}>🎥</span> Video 6</Link>
            <Link to="/Video7" style={linkStyle}> <span style={iconStyle}>🎥</span> Video 7</Link>
            <Link to="/Video8" style={linkStyle}> <span style={iconStyle}>🎥</span> Video 8</Link>
          </div>
          <div className="play-area">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Video1" element={<Video1 />} />
              <Route path="/Video2" element={<Video2 />} />
              <Route path="/Video3" element={<Video3 />} />
              <Route path="/Video4" element={<Video4 />} />
              <Route path="/Video5" element={<Video5 />} />
              <Route path="/Video6" element={<Video6 />} />
              <Route path="/Video7" element={<Video7 />} />
              <Route path="/Video8" element={<Video8 />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
