import "./MainPage.scss";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import Tarrifs from "./Tarrifs/Tarrifs";
import Posibiliities from "./Possibilities/Possibilities";
import About from "./About/About";
import Footer from "./Footer/Footer";
const Main = () => {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Info />
      <Tarrifs />
      <Posibiliities />
      <About />
      <Footer />
    </div>
  );
};

export default Main;
