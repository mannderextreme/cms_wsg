import { Nav, Container } from "react-bootstrap";
import NavBar from "./NavBar";
import CarouselFade from "./CarouselFade";
import LandingPage from "./LandingPage"
import Mannschaften from "./Mannschaften"
import ErsteMannschaft from "./ErsteMannschaft";
import ZweiteMannschaft from "./ZweiteMannschaft";
import DritteMannschaft from "./DritteMannschaft";
import VierteMannschaft from "./VierteMannschaft";
import FünfteMannschaft from "./FünfteMannschaft";
import Informationen from "./Informationen";
import Vereinsleben from "./Vereinsleben"
import Chronik from "./Chronik"
import Footer from "./Footer"
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
function Layout(){
  return <>
  <Container>
  <Router>
    <NavBar/>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/page1' element={<Mannschaften />}/>
    <Route path='/page2' element={<ErsteMannschaft />}/>
    <Route path='/page3' element={<ZweiteMannschaft />}/>
    <Route path='/page4' element={<DritteMannschaft />}/>
    <Route path='/page5' element={<VierteMannschaft />}/>
    <Route path='/page6' element={<FünfteMannschaft />}/>
    <Route path='/informationen' element={<Informationen />}/>
    <Route path='/vereinsleben' element={<Vereinsleben />}/>
    <Route path='/chronik' element={<Chronik />}/>
    </Routes>
    </Router>
    <CarouselFade/>
    <Footer/>
    </Container>
  </> 
}

export default Layout;