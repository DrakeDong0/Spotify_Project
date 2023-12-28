import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

import VideoPlayer from "react-background-video-player"
import BG_Video from './BG_Video.jsx';

function App() {
  return(
    <>
    <BG_Video></BG_Video>
    <Header></Header>
    <Food></Food>
    <Footer></Footer>
    </>
  );
} 

export default App
