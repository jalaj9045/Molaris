import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Screens/Contacts/Contact.css';
import './Screens/About/About.css';
import './Screens/Blog/blog.css';
import './Screens/Career/Career.css';
import './Screens/Service/service.css';
//Screens
import App from "./App";
import Home from '../src/Screens/Home/Home';
import Contact from '../src/Screens/Contacts/Contact';
import About from '../src/Screens/About/About';
import Blog from "./Screens/Blog/Blog";
import Career from "../src/Screens/Career/Career";
import Service from "../src/Screens/Service/Service";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="career" element={<Career />} />
      <Route path="service" element={<Service />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
