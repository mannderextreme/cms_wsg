import { Nav } from "react-bootstrap";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage"
import Mannschaften from "./Mannschaften"
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
function Layout(){
  return <Router>
    <NavBar/>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/page1' element={<Mannschaften />}/>
    </Routes>
    </Router>
}

export default Layout;