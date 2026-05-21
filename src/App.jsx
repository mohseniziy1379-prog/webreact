import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Courselist from "./components/courselist";
import Registration from "./components/Registration";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Lessonpage from "./components/Lessonpage";
import Cart from "./components/Cart";
import {AppDataProvider} from './NewContext'
import Dashboard from "./components/Dashboard";
import Addcourse from "./components/addcourse";

function App() {
  return (
    <AppDataProvider>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-us" element={<Aboutus/>}/>
            <Route path="/courses" element={<Courselist/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/Lessonpage/:id" element={<Lessonpage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/dashboard/addcourse" element={<Addcourse/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </AppDataProvider>
  );
}

export default App;
