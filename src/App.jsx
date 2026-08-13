import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Facilities from './components/Facilities'
import Gallery from './components/Gallery'
import BookingProcess from './components/BookingProcess'
import Testimonials from './components/Testimonials'
import Map from './components/Map'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import KakaoChat from './components/KakaoChat'

function App() {
  return (
    <div className="app">
      <Navigation />
      <div id="hero"><Hero /></div>
      <div id="rooms"><Rooms /></div>
      <div id="facilities"><Facilities /></div>
      <Gallery />
      <div id="booking-guide"><BookingProcess /></div>
      <div id="reviews"><Testimonials /></div>
      <Map />
      <div id="contact"><ContactForm /></div>
      <Footer />
      <KakaoChat />
    </div>
  )
}

export default App
