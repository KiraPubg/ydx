import "./Hero.scss";
import taxiImg from "../../../assets/img/taxi.svg";

const Hero = () => {
  return (
    <section className="section hero" id="hero">
      <div className="hero__row">
        <div className="hero__col-left">
          <div className="hero__img-block">
            <img src={taxiImg} alt="taxi" />
          </div>
          <div className="hero__codes">
            <p className="hero__code">779</p>
            <p className="hero__code">509</p>
            <p className="hero__code">559</p>
          </div>
        </div>
        <div className="hero__col-right">
          <a className="hero__phone" href="tel:996779272272">
            272-272
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
