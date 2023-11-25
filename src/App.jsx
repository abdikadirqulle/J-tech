import Header from './component/header/Header'
import Home from './component/home/Home'
import About from './component/about/About'
import Services from './component/services/Services'
import ICTStrategy from './component/ict-Strategy/ICT-Strategy'
import Testimonial from './component/testimonial/Testimonial'
import FAQ from './component/faq/FAQ'
import LastCTA from './component/last-CTA/Last-CTA'
import Contact from './component/constact/Contact'
import Footer from './component/footer/Footer'

const App = () => {
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY >= 10) {
      // header.style.backgroundColor = 'blue';
      header.classList.add = "shadow";
    } else {
      header.style.backgroundColor = '';
      
    }
  });

  return (
    <div className=" bg-white w-full h-screen">
      <div className="bg-white header backdrop-blur-2xl py-2  fixed w-full h-">
        <Header />
      </div>
      <div className="w-full h-screen flex flex-col ">
        <Home />
        <div className=" max-w-6xl mx-auto bg-red-300 ">
          {/* <About /> */}
          About
          <Services />
          <ICTStrategy />
          <Testimonial />
          <FAQ />
          <LastCTA />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App