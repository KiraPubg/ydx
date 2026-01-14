import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import headerLogo from "../../../assets/img/logo.png";
import headerLogin from "../../../assets/img/login.svg";
import "./Header.scss";
import HeaderBurger from "./HeaderBurger";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [headerNavOpen, setHeaderNavOpen] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="container">
        <Link
          className="header__logo"
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img src={headerLogo} alt="Logo" />
        </Link>
        <nav className={`header__nav ${headerNavOpen ? "active" : ""}`}>
          <ul className="header__list">
            <li className="header__list-item">
              <Link
                to="tariffs"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                offset={-100}
              >
                Тарифтер
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                offset={-100}
              >
                Биз жөнүндө
              </Link>
            </li>
            <li className="header__list-item login-item">
              <a href="#">
                <img src={headerLogin} alt="Login" />
              </a>
            </li>
          </ul>
        </nav>
        <HeaderBurger
          headerNavOpen={headerNavOpen}
          setHeaderNavOpen={setHeaderNavOpen}
        />
      </div>
    </header>
  );
};

export default Header;
