import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/Banner";
import Footer from "./components/footer";
import About from "./pages/about";
import Client from "./pages/client";
import Services from "./pages/Services";
import PortFolio from "./pages/portfolio";
import Team from "./pages/Team";
import Contact from "./pages/contact";
import MultiCarousal from "./components/caruosal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

      <Services />

      <div
        style={{
          backgroundColor: "#ebebe0",
          width: "100%",
          //   paddingTop: "80px",
          marginTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <PortFolio />
      </div>
      <About />
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <Team />
      </div>
      <Client />
      <Contact />
      <Footer />
      {/* <MultiCarousal/> */}
    </div>
  );
}

export default App;
