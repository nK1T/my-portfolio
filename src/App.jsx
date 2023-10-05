import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Email from "./components/email/Email"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"
import SocialIcons from "./components/social.icons/Socialicons"
import Whatsapp from "./components/whatsapp/Whatsapp"
function App() {
  
  return (
    <div className="main">
      <Navbar/>
      <SocialIcons/>
      <Email/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Whatsapp/>
    </div>
  )
}

export default App
